import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ButtonDisabledSliceProps} from '../../types';

const initialState: ButtonDisabledSliceProps = {
  disabled: true,
};

export const buttonDisabledSlice = createSlice({
  name: 'buttonDisabled',
  initialState,
  reducers: {
    setButtonDisabled: (state, action: PayloadAction<boolean>) => {
      state.disabled = action.payload;
    },
    disabledButton: state => {
      Object.assign(state, initialState);
    },
  },
});

export const {setButtonDisabled, disabledButton} = buttonDisabledSlice.actions;
export default buttonDisabledSlice.reducer;
