import { configureStore, EnhancedStore, PayloadAction } from '@reduxjs/toolkit';
import walletReducer, { WalletState } from './walletSlice';

let store: EnhancedStore<RootState>;

export type RootState = {
  wallet: WalletState;
};

export const configStore = () => {
  store = configureStore({
    reducer: {
      wallet: walletReducer,
    },
  });

  return store;
};

export const getState = () => store.getState();

export const dispatch = <T>(action: PayloadAction<T>) => store.dispatch(action);
