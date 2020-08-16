import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import counterReducer from './counter/counter.reducers';
import { AppStateType } from './types.d';
import productReducer from './product/product.reducers';

export const AppState: AppStateType = {
  counter: {
    count: 0,
  },
  product: {
    searchedProductsResp: [],
    searchedProductsErr: {},
  },
  // auth: {
  //   token: '',
  // },
};

export default combineReducers({
  // auth: authReducer,
  counter: counterReducer,
  product: productReducer,
});
