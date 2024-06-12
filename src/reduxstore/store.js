import {configureStore,combineReducers} from '@reduxjs/toolkit';
import Laptopslice from '../features/Laptopslice';
import { persistReducer } from 'redux-persist';
import CartSlice from '../features/cartSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const persistConfig = {
    key: 'root', // Key is required, it is used to store data in storage
    storage, // Use the storage engine you imported
  };

const reducer=combineReducers({
    laptopslice:Laptopslice,
    cartslice:CartSlice,
});
const persistreducer=persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer: persistreducer,
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})