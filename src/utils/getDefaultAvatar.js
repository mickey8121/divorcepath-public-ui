const userMale = '/canada/images/icons/dusk/png/user-male.png';
const userFemale = '/canada/images/icons/dusk/png/user-female.png';
const account = '/canada/images/icons/dusk/png/account.png';

const getDefaultAvatar = gender => {
  if (gender) return gender === 'MALE' ? userMale : userFemale;

  return account;
};

export default getDefaultAvatar;
