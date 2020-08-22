import { AppState } from '../rootReducer';
import {
  ADD_TO_CART_SUCCESS,
  UPDATE_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  ADD_TO_WISHLIST_SUCCESS,
  UPDATE_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAILURE,
  UPDATE_WISHLIST_FAILURE,
  ADD_TO_WISHLIST_FAILURE,
  REMOVE_FROM_CART_FAILURE,
  UPDATE_CART_FAILURE,
  ADD_TO_CART_FAILURE,
} from './profile.interfaces';
import { AppActions, AppStateType } from '../types';

const profileReducer = (state = AppState.profile, action: AppActions): AppStateType['profile'] => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      const productsInCart: any = [...state.productsInCart, ...action.payload];
      return { ...state, productsInCart };
    case ADD_TO_CART_FAILURE:
      return { ...state, cartErr: action.payload };
    case UPDATE_CART_SUCCESS:
      console.log('UPDATE_CART_SUCCESS is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    case UPDATE_CART_FAILURE:
      console.log('UPDATE_CART_FAILURE is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    case REMOVE_FROM_CART_SUCCESS:
      console.log('REMOVE_FROM_CART_SUCCESS is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    case REMOVE_FROM_CART_FAILURE:
      console.log('REMOVE_FROM_CART_FAILURE is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    case ADD_TO_WISHLIST_SUCCESS:
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      console.log('ADD_TO_WISHLIST_SUCCESS is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    case ADD_TO_WISHLIST_FAILURE:
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      console.log('ADD_TO_WISHLIST_FAILURE is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    case UPDATE_WISHLIST_SUCCESS:
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      console.log('UPDATE_WISHLIST_SUCCESS is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    case UPDATE_WISHLIST_FAILURE:
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      console.log('UPDATE_WISHLIST_FAILURE is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    case REMOVE_FROM_WISHLIST_SUCCESS:
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      console.log('REMOVE_FROM_WISHLIST_SUCCESS is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    case REMOVE_FROM_WISHLIST_FAILURE:
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      console.log('REMOVE_FROM_WISHLIST_FAILURE is also running ******************************');
      // const productsInCart: any = [...state.productsInCart];
      // productsInCart.push(action.payload.productDetail);
      // return { ...state, productsInCart };
      return { ...state };
    default:
      return { ...state };
  }
};

export default profileReducer;
