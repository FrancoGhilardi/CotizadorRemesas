import {configureStore} from '@reduxjs/toolkit';
import {buttonDisabledReducer, currencySliceReducer} from './Slice';

export const store = configureStore({
  reducer: {
    buttonDisabled: buttonDisabledReducer,
    currency: currencySliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
