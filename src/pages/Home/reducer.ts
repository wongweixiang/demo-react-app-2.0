import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import homeAPI from "../../api/home.api";
import { HomeState } from "./types";

export const fetchWallets = createAsyncThunk("home/fetchAccounts", async () => {
  const { data } = await homeAPI.getWallets();
  return data;
});

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
    wallets: [],
    contacts: [],
  } as HomeState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWallets.fulfilled, (state, action) => {
      state.wallets = action.payload;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
  },
});

export default homeSlice.reducer;
