import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Accounting } from 'src/model/Accounting';

// define the type of state
export type WalletState = {
  balance: number;
  accountings: Accounting[];
};

// define the initial value of state
const initialState: WalletState = {
  balance: 0,
  accountings: [],
};

// define the actions in "reducers"
export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    addAccounting: (state: WalletState, action: PayloadAction<Accounting>) => {
      state.accountings = [action.payload, ...state.accountings];
      if (action.payload.type === 'add') state.balance += action.payload.amount;
      else if (action.payload.type === 'minus') state.balance -= action.payload.amount;
    },
  },
});

// action creators are generated for each case reducer function
export const { addAccounting } = walletSlice.actions;

export default walletSlice.reducer;
