// Writing typesafe actions with typesafe-actions
import { action } from 'typesafe-actions'
import { authActionTypes } from './types'

const loginAction = () => action(authActionTypes.LOGIN_REQUEST)

const signupAction = () => action(authActionTypes.SIGNUP_REQUEST)

export { loginAction, signupAction }
