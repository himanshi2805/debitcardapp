import {createStore, applyMiddleware, AnyAction} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import DefaultState from './reducers/default';
import combineReducers from './reducers';
import rootSaga from './sagas';
import {LOG_OUT} from '@app/constants';
import {reduxPersistConfig} from '@app/config';

const rootReducer = (
  state: ReturnType<typeof combineReducers>,
  action: AnyAction,
) => {
  if (action.type === LOG_OUT) {
    state = DefaultState;
  }
  return combineReducers(state, action);
};

const persistedReducer = persistReducer(reduxPersistConfig, rootReducer);

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return {store, persistor};
};

export default configureAppStore;
