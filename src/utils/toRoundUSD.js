import toUSD from 'utils/toUSD';

export default number => toUSD(Math.abs(Math.round(number)))