/* eslint-disable no-unused-vars */
import * as yup from 'yup';

import { canadianProvincesArray, canadianTerritoriesArray } from 'utils/places';

const optionsArray = canadianProvincesArray.concat(canadianTerritoriesArray);

const message = 'Required field';
const date = yup
  .string()
  .nullable()
  .required(message);

const name = yup
  .string()
  .min(1, 'Too short')
  .nullable()
  .required(message);

const boolean = yup.boolean().required(message);
const parenting = yup
  .string()
  .oneOf(['CLIENT', 'SHARED', 'EX'])
  .required(message);

const incomeValidationSchema = () => {
  const incomeShapeCreate = {
    key: yup.string().required(message)
  };

  return yup.object().shape({
    all: yup.object().shape({
      create: yup
        .array()
        .of(yup.object().shape(incomeShapeCreate))
        .required(message)
    })
  });
};

const partyValidationSchema = () =>
  yup.object().shape({
    firstName: name,
    lastName: yup.string().nullable(),
    // gender,
    hasNewPartner: yup
      .boolean()
      .nullable()
      .test('hasNewPartner', message, value => [false, true].includes(value))
      .required(message),
    birthDate: date,
    residence: yup.string().oneOf(optionsArray),
    income: yup.object().shape({
      create: incomeValidationSchema()
    })
  });

const childValidationSchema = yup.object().shape({
  firstName: name,
  birthDate: date,
  // gender,
  isOfRelationship: boolean,
  parenting
});

// makes the children field required if hasChildren === true
function checkChildren() {
  const { parent } = this;
  const { create = [] } = parent.children || {};

  return !parent.hasChildren || create.length;
}

const validationSchema = calculatorType => {
  const schema = {
    hasChildren: yup.boolean(),
    title: yup
      .string()
      .required(message)
      .min(3),
    clientSupportProfile: yup.object().shape({
      create: partyValidationSchema()
    }),
    exSupportProfile: yup.object().shape({
      create: partyValidationSchema()
    }),
    children: yup
      .object()
      .nullable()
      .shape({
        create: yup
          .array()
          .of(childValidationSchema)
      })
      .test('hasChildren', 'Children is required', checkChildren)
  };

  if (calculatorType === 'CHILD') {
    schema.children = yup
      .object()
      .nullable()
      .shape({
        create: yup
          .array()
          .of(childValidationSchema)
          .required('Required')
      })
      .test('hasChildren', 'Children is required', checkChildren);
  }

  if (calculatorType === 'SPOUSAL') {
    schema.relationship = yup.object().shape({
      create: yup.object().shape({
        cohabitationDate: date,
        separationDate: date
      })
    });
  }
  return yup.object().shape(schema);
};

export default validationSchema;

const personFormSchema = yup.object().shape({});

export { personFormSchema };
