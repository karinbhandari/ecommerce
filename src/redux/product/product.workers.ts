import { getWithoutHeader, getWithHeader } from '../../api/rest/apiFunc';
import { ROOT_URL, PRODUCT_SEARCH_LINK } from '../../api/rest/links';
import { AppActions } from '../types';

function* searchProductsWorker(action: AppActions): Generator {
  yield console.log('App actions ============+> ', action);
  try {
    const { data: searchedProductsResp, error: searchedProductsErr } = yield getWithHeader(
      `${ROOT_URL}${PRODUCT_SEARCH_LINK}?api_key=Ydn0CIuq4U680KrU0ct9mG2cMYpwEpTw&s=tshirt`,
      action.payload,
      (data) => {
        console.log('search Product resp ==================> ', data);
      },
      (err) => {
        console.log('search Product resp ==================> ', err);
      }
    );
  } catch (error) {}
}

export { searchProductsWorker };
