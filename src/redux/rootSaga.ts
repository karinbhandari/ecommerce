import { all } from 'redux-saga/effects';
import { authWatchers } from './auth/watcher';
import { productWatchers } from './product/product.watchers';
import { profileWatchers } from './profile/profile.watchers';

// import {
//    userActions, userApi, userReducer, usersWatchers
// } from "./users";
// import {
//    listActions, listApi, listReducer, listsWatchers,
// } from "./lists";
export default function* rootSagas(): Generator {
  const watchers = [...authWatchers, ...productWatchers, ...profileWatchers];
  yield all(watchers);
}

// export default function* rootSagas () {
//   const watchers = [...listsWatchers, ...usersWatchers];
//   yield all(watchers);

// }

// export {
//   userActions,
//   userApi,
//   userReducer,
//   rootSagas,
//   listActions,
//   listApi,
//   listReducer,
//   listsWatchers,
// };
