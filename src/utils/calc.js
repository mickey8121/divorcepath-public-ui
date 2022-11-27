import customGet from 'utils/get';

export default (scenario, payor, postfix1, postfix2, postfix3) => {
  const result = [
    Math.abs(Math.round(customGet(scenario, `${payor}.${postfix1}`, 0))),
    Math.abs(Math.round(customGet(scenario, `${payor}.${postfix2}`, 0)))
  ];

  if (postfix3) {
    result.push(Math.abs(Math.round(customGet(scenario, `${payor}.${postfix3}`, 0))));
  }

  return result;
};
