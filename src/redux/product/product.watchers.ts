import { takeLatest, ForkEffect, fork } from 'redux-saga/effects';
import { SEARCH_PRODUCT } from './product.interfaces';
import { searchProductsWorker } from './product.workers';

function* searchProductsWatcher(): Generator {
  yield takeLatest(SEARCH_PRODUCT, searchProductsWorker);
}

export const productWatchers: ForkEffect[] = [fork(searchProductsWatcher)];
