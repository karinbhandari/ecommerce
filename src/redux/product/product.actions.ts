import { action, ActionType } from 'typesafe-actions';
import {
  SEARCH_PRODUCT,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
} from './product.interfaces';
import { Action } from 'redux';

const searchProducts = (searchTerm: string): ActionType<Action> =>
  action(SEARCH_PRODUCT, searchTerm);

const searchProductsSuccess = (searchProductsResp: Array<object>): ActionType<Action> =>
  action(SEARCH_PRODUCT_SUCCESS, searchProductsResp);

const searchProductsFailure = (searchProductsErr: object): ActionType<Action> =>
  action(SEARCH_PRODUCT_FAILURE, searchProductsErr);

export { searchProducts, searchProductsSuccess, searchProductsFailure };
