import { action, ActionType } from 'typesafe-actions';
import {
  SEARCH_PRODUCT,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
} from './product.interfaces';
import { Action } from 'redux';

const searchProducts = (query: object): ActionType<Action> => action(SEARCH_PRODUCT, query);

const searchProductsSuccess = (searchProductsResp: Array<object>): ActionType<Action> =>
  action(SEARCH_PRODUCT_SUCCESS, searchProductsResp);

const searchProductsFailure = (searchProductsErr: object): ActionType<Action> =>
  action(SEARCH_PRODUCT_FAILURE, searchProductsErr);

export { searchProducts, searchProductsSuccess, searchProductsFailure };
