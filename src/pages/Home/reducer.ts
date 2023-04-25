import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import homeAPI from "../../api/home.api";
import { HomeState } from "./types";

export const fetchAccountsData = createAsyncThunk(
  "home/fetchAccounts",
  async () => {
    const { data } = await homeAPI.getAccounts();
    return data;
  }
);

export const fetchContacts = createAsyncThunk(
  "home/fetchContacts",
  async () => {
    const { data } = await homeAPI.getContacts();
    return data;
  }
);

export const sendPayment = createAsyncThunk(
  "home/sendPayment",
  async (params: { recipientId: number; walletId: number; amount: string }) => {
    const { data } = await homeAPI.sendTransaction(params);
    return data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    accountsData: [],
    contacts: [],
  } as HomeState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccountsData.fulfilled, (state, action) => {
      state.accountsData = action.payload;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
    builder.addCase(sendPayment.fulfilled, (state, action) => {
      const { walletId, amount } = action.payload.details;

      state.accountsData = state.accountsData.map((a) =>
        a.accountId === walletId
          ? {
              ...a,
              balance: (Number(a.balance) - amount).toFixed(2).toString(),
            }
          : a
      );
    });
  },
});

export default homeSlice.reducer;
