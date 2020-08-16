import { createStore, applyMiddleware, Middleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { ExtendedStore, AppStateType } from './types';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  const arrMiddleware: Middleware[] = [...middleware];

  if (process.env.NODE_ENV !== 'production') {
    arrMiddleware.push(createLogger());
    return composeWithDevTools(applyMiddleware(...arrMiddleware));
  }
  return applyMiddleware(...arrMiddleware);
};

const configureStore: MakeStore<AppStateType> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware])) as ExtendedStore;

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export { configureStore };

export const wrapper = createWrapper<AppStateType>(configureStore, { debug: true });
// export default configureStore;
