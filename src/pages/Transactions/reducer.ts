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
  initialState: {
    transactions: [],
    pagination: { currentPage: 1, pageSize: 5 },
  },
  reducers: {
    updatePage(state, action) {
      state.pagination.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload;
    });
  },
});

export const { updatePage } = transactionsSlice.actions;

export default transactionsSlice.reducer;
