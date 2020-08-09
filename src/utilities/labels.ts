import { validationMessage as validationMessageT, testText as testTextT } from './interfaces'

const validationMessages: validationMessageT = {
  en: {
    numNotAllowed: 'Numbers are not allowed.',
    textNotAllowed: 'Texts are not allowed.',
    invalidEmail: 'Email is invalid.',
  },
  ar: {
    numNotAllowed: 'البريد الإلكتروني غير صالح.',
    textNotAllowed: 'النصوص غير مسموح بها.',
    invalidEmail: 'البريد الإلكتروني غير صالح.',
  },
}

const testText: testTextT = {
  en: {
    email: '7.21elonmusk',
    randomName: 'Elon Musk',
    randomFirstName: 'Elon',
    randomLastName: 'Musk',
  },
  ar: {
    email: '7.21karinbhandari',
    randomName: 'Karin Bhandari',
    randomFirstName: 'Elon',
    randomLastName: 'Musk',
  },
}

export { validationMessages, testText }
