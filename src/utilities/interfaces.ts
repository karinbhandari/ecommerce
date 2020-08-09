type validationMessageObj = {
  numNotAllowed: string
  textNotAllowed: string
  invalidEmail: string
}

type validationMessage = {
  en: validationMessageObj
  ar: validationMessageObj
}

type testTextObj = {
  email: string
  randomName: string
  randomFirstName: string
  randomLastName: string
}

type testText = {
  en: testTextObj
  ar: testTextObj
}

type isEmail = {
  isValid: boolean
  message: string
}

export type { validationMessage, testText, isEmail }
