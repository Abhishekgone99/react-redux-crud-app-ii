import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = legacy_createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger)))
export let persistor = persistStore(store);

