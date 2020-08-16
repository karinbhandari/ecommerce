import { AppState } from '../rootReducer';
import {
  //   SEARCH_PRODUCT,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
} from './product.interfaces';
import { AppActions, AppStateType } from '../types';

const productReducer = (state = AppState.product, action: AppActions): AppStateType['product'] => {
  switch (action.type) {
    // case SEARCH_PRODUCT:
    //   return { ...state };
    case SEARCH_PRODUCT_SUCCESS:
      return { ...state, searchedProductsResp: action.searchedProductsResp };
    case SEARCH_PRODUCT_FAILURE:
      return { ...state, searchedProductsErr: action.searchedProductsErr };
    default:
      return { ...state };
  }
};

export default productReducer;
