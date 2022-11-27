export const canadianProvincesArray = [
  'Ontario',
  /* 'Quebec', */
  'Nova Scotia',
  'New Brunswick',
  'Manitoba',
  'British Columbia',
  'Prince Edward Island',
  'Saskatchewan',
  'Alberta',
  'Newfoundland and Labrador'
];

export const canadianProvinces = canadianProvincesArray.map((province, index) => ({
  id: index,
  name: province,
  value: province
}));

export const canadianTerritoriesArray = ['Northwest Territories', 'Yukon', 'Nunavut'];

export const canadianTerritories = canadianTerritoriesArray.map((territory, index) => ({
  id: index,
  name: territory,
  value: territory
}));
