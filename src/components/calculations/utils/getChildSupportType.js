import dayjs from 'dayjs';

const getChildSupportType = child => {
  if (!child) return null;

  if (
    !child.isOfRelationship ||
    (dayjs().diff(child.birthDate, 'years') >= 18 && !child.isDependent)
  ) {
    return 'none';
  }

  return child.supportType.toLowerCase();
};

export default getChildSupportType;
