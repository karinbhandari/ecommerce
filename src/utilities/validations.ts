import { EMAIL_REGEX } from './consts'
import { validationMessages as label } from './labels'
import { isEmail as isEmailType } from './interfaces'
import { useContext } from 'react'
import Context from '../context'
import { getFromCookie } from './storageFunc'

const lang: string = getFromCookie('lang') || 'en'

const isText = (val: string): string => {
  return label[lang].numNotAllowed
}

const isNum = (val: number): string => {
  return label[lang].textNotAllowed
}

const isEmail = (val: string): isEmailType => {
  if (EMAIL_REGEX.test(val)) {
    return {
      isValid: false,
      message: '',
    }
  } else {
    return {
      isValid: true,
      message: label[lang].invalidEmail,
    }
  }
}

export { isText, isNum, isEmail }
