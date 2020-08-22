import { combineReducers } from 'redux';
// import authReducer from './auth/reducers';
import counterReducer from './counter/counter.reducers';
import { AppStateType } from './types.d';
import productReducer from './product/product.reducers';
import profileReducer from './profile/profile.reducers';

export const AppState: AppStateType = {
  counter: {
    count: 0,
  },
  product: {
    searchedProductList: [],
    searchedProductsErr: {},
  },
  profile: {
    profileDetail: {},
    productsInCart: [],
    cartErr: '',
    productsInWishList: [],
    wishListErr: '',
  },
  auth: {
    token: '',
  },
};

export default combineReducers({
  // auth: authReducer,
  counter: counterReducer,
  product: productReducer,
  profile: profileReducer,
});
