import get from 'lodash/get';

const customGet = (obj, path, def) => {
  const result = get(obj, path, def);

  if (result === null) {
    return def;
  }

  return result;
};

export default customGet;
