import allTaxTables from 'utils/taxTables';
import customGet from 'utils/get';

const getCalculationContext = supportCalculation => ({
  taxTables: allTaxTables[(supportCalculation?.taxYear)],
  clientResidence: customGet(supportCalculation?.clientSupportProfile, 'residence'),
  exResidence: customGet(supportCalculation?.exSupportProfile, 'residence'),
  clientName: customGet(supportCalculation?.clientSupportProfile, 'firstName'),
  exName: customGet(supportCalculation?.exSupportProfile, 'firstName')
});

export default getCalculationContext;
