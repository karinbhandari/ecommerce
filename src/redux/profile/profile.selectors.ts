import { AppStateType } from '../types';
import { createSelector } from 'reselect';

const selectProfile = (state: AppStateType) => state.profile;

const countTotalProductsInCart = createSelector(
  [selectProfile],
  (profile: AppStateType['profile']): number => profile.productsInCart.length
);

const getAddToCartErr = createSelector(
  [selectProfile],
  (profile: AppStateType['profile']): string => profile.cartErr
);

export { countTotalProductsInCart, getAddToCartErr };
