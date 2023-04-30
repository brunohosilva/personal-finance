import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { TUserInfo, TTransactionItem, TUserState } from './types';

const initialState: TUserState = {
  budget: 0,
  transactions: [],
  user: {
    email: '',
    token: ''
  }
};

const setUserBudgetState = (
  state: Draft<TUserState>,
  action: PayloadAction<number>,
) => {
  state.budget = action.payload;
};


const setAddItemTrasactionState = (
  state: Draft<TUserState>,
  action: PayloadAction<TTransactionItem>,
) => {
  state.transactions = [...state.transactions, action.payload];
};


const setUserInfos = (
  state: Draft<TUserState>,
  action: PayloadAction<TUserInfo>,
) => {
  state.user = action.payload;
};

const clearUser = (
  state: Draft<TUserState>,
) => {
  state.user = {email: '', token: ''};
};

export const userSlice = createSlice({
  name: 'finance/user',
  initialState,
  reducers: {
    putUserBudget: setUserBudgetState,
    putItemTransaction: setAddItemTrasactionState,
    putUserInfos: setUserInfos,
    setClearUser: clearUser,
    resetState: () => initialState
  },
});

export const { putUserInfos, putUserBudget, putItemTransaction, resetState, setClearUser } = userSlice.actions;

export default userSlice.reducer;
