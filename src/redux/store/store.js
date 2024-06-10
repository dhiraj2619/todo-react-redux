import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { authReducer } from '../reducers/authReducer';
import {thunk} from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
