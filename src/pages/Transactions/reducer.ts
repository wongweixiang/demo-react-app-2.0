import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import transactionsAPI from "../../api/transactions.api";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (params: Record<string, unknown>) => {
    const { data } = await transactionsAPI.getTransactions(params);
    return data;
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: { transactions: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload;
    });
  },
});

export default transactionsSlice.reducer;
