import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //this is gonna store the data locally of the user on the browser


const rootReducer = combineReducers({user:userReducer});
const persisConfig = {
    key :'root',
    version: 1,
    storage ,

}
const persistedReducer = persistReducer(persisConfig, rootReducer)

export const store = configureStore({
    reducer :  persistedReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    }),
});

export const persistor = persistStore(store);