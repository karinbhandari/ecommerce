// import { authTypes } from './actions'
import { initialAuthStateTypes, authActionTypes } from './types';
import { Reducer } from 'redux';
// import { HYDRATE } from 'next-redux-wrapper'

export const initialAuthState: initialAuthStateTypes = {
  token: '',
};

const authReducer: Reducer<initialAuthStateTypes> = (state = initialAuthState, action) => {
  switch (action.type) {
    // case HYDRATE: {
    //   return { ...state, ...action.payload }
    // }
    case authActionTypes.LOGIN_REQUEST:
      console.log('Will Perform login action');
      return state;
    // break
    case authActionTypes.SIGNUP_REQUEST:
      console.log('Will Perform signup action');
      return state;
    // break
    default:
      return state;
  }
};

export default authReducer;
