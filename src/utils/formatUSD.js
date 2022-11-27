import toUSD from 'utils/toUSD';

export default number => toUSD(Math.abs(parseFloat(number).toFixed(2)));
