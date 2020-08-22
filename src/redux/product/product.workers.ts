import { delay, put } from 'redux-saga/effects';
import { AppActions } from '../types';
import { getWithoutHeader, getWithHeader } from '../../api/rest/apiFunc';
import { ROOT_URL, PRODUCT_SEARCH_LINK } from '../../api/rest/links';
import { searchProductsSuccess, searchProductsFailure } from './product.actions';
import { apiFuncReturnTypes } from '../../api/interfaces';

function* searchProductsWorker(action: AppActions): Generator {
  yield delay(500);
  try {
    const { data: searchedProductsResp, err: searchedProductsErr }: any = yield getWithHeader(
      `${ROOT_URL}${PRODUCT_SEARCH_LINK}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&s=${action?.payload}`,
      action.payload
    );

    if (searchedProductsResp) yield put(searchProductsSuccess(searchedProductsResp));

    if (searchedProductsErr) yield put(searchProductsFailure(searchedProductsErr));
  } catch (error) {
    yield put(searchProductsFailure(error.message));
  }
}

export { searchProductsWorker };
