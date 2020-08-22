import { AppActions } from '../types';
import { addToLocalStorage, getFromLocalStorage } from '../../utilities/storageFunc';
import { put } from 'redux-saga/effects';
import { addToCartSuccess, addToCartFailure } from './profile.actions';

// ************************ CART ************************
function* loadTheCartWorker(): Generator {
  try {
    const productsInCart: any = yield JSON.parse(getFromLocalStorage('bhrv01_productsInCart')) ||
      [];
    yield put(addToCartSuccess(productsInCart));
  } catch (error) {
    yield put(addToCartFailure(error.message));
  }
}

function* addToCartWorker(action: AppActions): Generator {
  try {
    const productsInCart: any = yield JSON.parse(getFromLocalStorage('bhrv01_productsInCart')) ||
      [];
    yield productsInCart.push(action.payload);
    yield addToLocalStorage('bhrv01_productsInCart', JSON.stringify(productsInCart));
    yield put(addToCartSuccess(productsInCart));
  } catch (error) {
    yield put(addToCartFailure(error.message));
  }
}

function* updateCartWorker(action: AppActions): Generator {
  yield console.log('updateCartWorker ====================> ');
}

function* removeFromCartWorker(action: AppActions): Generator {
  yield console.log('removeFromCartWorker ====================> ');
}

// ************************ WISHLIST ************************
function* addToWhishlistWorker(action: AppActions): Generator {
  yield console.log('addToWhishlistWorker ====================> ');
}

function* updateWhishlistWorker(action: AppActions): Generator {
  yield console.log('updateWhishlistWorker ====================> ');
}

function* removeFromWhishlistWorker(action: AppActions): Generator {
  yield console.log('removeFromWhishlistWorker ====================> ');
}

export {
  loadTheCartWorker,
  addToCartWorker,
  updateCartWorker,
  removeFromCartWorker,
  addToWhishlistWorker,
  updateWhishlistWorker,
  removeFromWhishlistWorker,
};
