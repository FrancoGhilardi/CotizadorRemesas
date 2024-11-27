import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrencySliceProps} from '../../types';

const initialState: CurrencySliceProps = {
  payment: '',
  send: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    updateCurrency: (
      state,
      action: PayloadAction<Pick<CurrencySliceProps, 'payment' | 'send'>>,
    ) => {
      const data = action.payload;
      state.payment = data.payment;
      state.send = data.send;
    },
    clearCurrency: state => {
      Object.assign(state, initialState);
    },
  },
});

export const {updateCurrency, clearCurrency} = currencySlice.actions;
export default currencySlice.reducer;
