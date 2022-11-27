const baby = '/canada/images/icons/dusk/png/baby.png';
const boy = '/canada/images/icons/dusk/png/boy.png';
const girl = '/canada/images/icons/dusk/png/girl.png';
const userMale = '/canada/images/icons/dusk/png/user-male.png';
const userFemale = '/canada/images/icons/dusk/png/user-female.png';

const getChildAvatar = (gender, age = 0) => {
  if (gender) {
    if (age < 3) return baby;
    if (age < 18) {
      return gender === 'MALE' ? boy : girl;
    }

    return gender === 'MALE' ? userMale : userFemale;
  }

  return baby;
};

export default getChildAvatar;
