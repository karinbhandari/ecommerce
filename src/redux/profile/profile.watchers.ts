import { takeLatest, ForkEffect, fork } from 'redux-saga/effects';
import {
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  UPDATE_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_WISHLIST,
  LOAD_THE_CART,
} from './profile.interfaces';
import {
  addToCartWorker,
  updateCartWorker,
  removeFromCartWorker,
  addToWhishlistWorker,
  updateWhishlistWorker,
  removeFromWhishlistWorker,
  loadTheCartWorker,
} from './profile.workers';

// ************************ CART ************************
function* loadTheCartWatcher(): Generator {
  yield takeLatest(LOAD_THE_CART, loadTheCartWorker);
}

function* addToCartWatcher(): Generator {
  yield takeLatest(ADD_TO_CART, addToCartWorker);
}

function* updateCartWatcher(): Generator {
  yield takeLatest(UPDATE_CART, updateCartWorker);
}

function* removeFromCartWatcher(): Generator {
  yield takeLatest(REMOVE_FROM_CART, removeFromCartWorker);
}

// ************************ WISHLIST ************************
function* addToWhishlistWatcher(): Generator {
  yield takeLatest(ADD_TO_WISHLIST, addToWhishlistWorker);
}

function* updateWhishlistWatcher(): Generator {
  yield takeLatest(UPDATE_WISHLIST, updateWhishlistWorker);
}

function* removeFromWhishlistWatcher(): Generator {
  yield takeLatest(REMOVE_FROM_WISHLIST, removeFromWhishlistWorker);
}

export const profileWatchers: ForkEffect[] = [
  fork(loadTheCartWatcher),
  fork(addToCartWatcher),
  fork(updateCartWatcher),
  fork(removeFromCartWatcher),
  fork(addToWhishlistWatcher),
  fork(updateWhishlistWatcher),
  fork(removeFromWhishlistWatcher),
];
