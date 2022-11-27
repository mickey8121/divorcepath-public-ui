import dayjs from 'dayjs';

const getSchoolDates = birthDate => {
  // define default school start date and end date for each child
  const birthMonth = dayjs(birthDate).month;

  const defaultSchoolStartYear =
    birthMonth < 9 ? dayjs(birthDate).year() + 7 : dayjs(birthDate).year() + 8;
  const defaultSchoolStartDate = dayjs([defaultSchoolStartYear, 8, 1]).toDate();

  const defaultSchoolEndYear =
    birthMonth < 7 ? dayjs(birthDate).year() + 18 : dayjs(birthDate).year() + 19;
  const defaultSchoolEndDate = dayjs([defaultSchoolEndYear, 5, 30]).toDate();

  return { defaultSchoolStartDate, defaultSchoolEndDate };
};

export default getSchoolDates;
