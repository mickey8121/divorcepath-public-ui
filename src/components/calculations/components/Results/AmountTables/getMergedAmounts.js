import numeral from 'numeral';
import customGet from 'utils/get';

function mergeArrays(arr1, arr2, keepBoth = false) {
  const temp = [];
  arr1.forEach(amount => {
    const amountDetails = arr2.find(option => option.key === amount.key);
    if (amountDetails === undefined) {
      temp.push(amount);
    } else {
      temp.push({ ...amount, ...amountDetails });
    }
  });
  if (keepBoth === true) {
    arr2.forEach(amount => {
      const isMerged = temp.find(option => option.key === amount.key);
      if (isMerged === undefined) {
        temp.push(amount);
      }
    });
  }
  return temp;
}

function mergeAmounts(scenario, amountType, taxTable) {
  const clientAmountsRaw = customGet(scenario, `clientSpousalSupport.${amountType}.all`, []);
  const clientAmounts = mergeArrays(
    clientAmountsRaw.map(amount => ({
      ...amount,
      client: numeral(amount.amount || 0).format('($0,0')
    })),
    taxTable.client
  );
  const exAmountsRaw = customGet(scenario, `exSpousalSupport.${amountType}.all`, []);
  const exAmounts = mergeArrays(
    exAmountsRaw.map(amount => ({
      ...amount,
      ex: numeral(amount.amount || 0).format('($0,0')
    })),
    taxTable.ex
  );
  const merged = mergeArrays(clientAmounts, exAmounts, true);
  return merged;
}

function getMergedAmounts(amountType, jurisdiction, scenario, context) {
  const amountCamelCase =
    jurisdiction === '' ? amountType : amountType[0].toUpperCase() + amountType.substring(1);
  const options = {};
  options.ex = customGet(
    context.taxTables,
    jurisdiction === 'federal'
      ? `${jurisdiction}.${amountType}`
      : jurisdiction === ''
        ? amountType
        : `provincial.${context.exResidence}.${amountType}`,
    []
  );
  options.client = customGet(
    context.taxTables,
    jurisdiction === 'federal'
      ? `${jurisdiction}.${amountType}`
      : jurisdiction === ''
        ? amountType
        : `provincial.${context.clientResidence}.${amountType}`,
    []
  );
  const amounts = mergeAmounts(scenario, `${jurisdiction}${amountCamelCase}`, options);
  return amounts;
}

export default getMergedAmounts;
