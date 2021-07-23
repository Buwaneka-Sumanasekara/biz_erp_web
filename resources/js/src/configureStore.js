import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './redux-states';
import storage from 'redux-persist/lib/storage';

import * as AppActions from './redux-states/app/actions';

import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage:storage,
    timeout: null,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {

    const reduxLogger = createLogger({ predicate: (getState, action) => true });
    let middlewares = [thunk]

    if (true) {
        middlewares = [...middlewares, reduxLogger];
    }


    let store = createStore(persistedReducer, undefined,
        compose(applyMiddleware(...middlewares)))
    let persistor = persistStore(store, null, () => {
        store.dispatch(AppActions.appStateLoaded())
      });
    return { store, persistor }
}