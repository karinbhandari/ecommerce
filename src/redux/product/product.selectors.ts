import { AppStateType } from '../types';
import { createSelector } from 'reselect';

const selectProduct = (state: AppStateType) => state.product;

const selectSearchedProductsList = createSelector(
  [selectProduct],
  (product: AppStateType['product']): number => product.searchedProductList
);

export { selectSearchedProductsList };
