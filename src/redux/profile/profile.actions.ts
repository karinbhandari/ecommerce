import { action, ActionType } from 'typesafe-actions';
import {
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  ADD_TO_WISHLIST,
  UPDATE_WISHLIST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  LOAD_THE_CART,
} from './profile.interfaces';
import { Action } from 'redux';

// ************************ CART ************************
const loadTheCart = (): ActionType<Action> => action(LOAD_THE_CART);

const addToCart = (productDetail: any): ActionType<Action> => action(ADD_TO_CART, productDetail);

const addToCartSuccess = (updatedProductsInCart: any): ActionType<Action> =>
  action(ADD_TO_CART_SUCCESS, updatedProductsInCart);

const addToCartFailure = (message: string): ActionType<Action> =>
  action(ADD_TO_CART_FAILURE, message);

const updateCart = (productDetail: any): ActionType<Action> => action(UPDATE_CART, productDetail);

const removeFromCart = (productId: number): ActionType<Action> =>
  action(REMOVE_FROM_CART, productId);

// ************************ CART ************************
const addToWhishlist = (productDetail: any): ActionType<Action> =>
  action(ADD_TO_WISHLIST, productDetail);

const updateWhishlist = (productDetail: any): ActionType<Action> =>
  action(UPDATE_WISHLIST, productDetail);

const removeFromWhishlist = (productId: number): ActionType<Action> =>
  action(REMOVE_FROM_WISHLIST, productId);

export {
  loadTheCart,
  addToCart,
  addToCartSuccess,
  addToCartFailure,
  updateCart,
  removeFromCart,
  addToWhishlist,
  updateWhishlist,
  removeFromWhishlist,
};
