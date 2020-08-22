import { AppState } from '../rootReducer';
import {
  //   SEARCH_PRODUCT,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
} from './product.interfaces';
import { AppActions, AppStateType } from '../types';

const productReducer = (state = AppState.product, action: AppActions): AppStateType['product'] => {
  switch (action.type) {
    case SEARCH_PRODUCT_SUCCESS:
      return { ...state, searchedProductList: action.payload };
    case SEARCH_PRODUCT_FAILURE:
      console.log('SEARCH_PRODUCT_FAILURE is running');
      return { ...state, searchedProductsErr: action.payload };
    default:
      return { ...state };
  }
};

export default productReducer;
