import {configureStore} from '@reduxjs/toolkit';
import Laptopslice from '../features/Laptopslice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from '@reduxjs/toolkit';


const persistConfig = {
    key: 'root', // Key is required, it is used to store data in storage
    storage, // Use the storage engine you imported
  };

const reducer=combineReducers({
    laptopslice:Laptopslice,
})
const persistreducer=persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer: persistreducer,
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})