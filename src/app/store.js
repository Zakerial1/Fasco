import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../features/componenc/Slices/SlicePlashka';
import corzinaReducer from '../features/componenc/Slices/SliceCorzina';
import autorizationReducer from '../features/componenc/Slices/SliceRegistr';
import commentReducer from '../features/componenc/Slices/SliceCommt';
import  listReducer  from '../features/componenc/Slices/SliceList';
export const store = configureStore({
  reducer: {
    filtr: filterReducer,
    corzina: corzinaReducer,
    autorization:autorizationReducer,
    comment:commentReducer,
    list:listReducer
  },
});
