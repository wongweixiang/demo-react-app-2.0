import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersAPI from "../../api/users.api";

export const fetchUsersTest = createAsyncThunk<any>(
  "home/fetchUsers",
  async () => {
    const { data } = await usersAPI.getUsers();
    return data;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    accountsData: [],
    users: [],
  },
  reducers: {
    fetchAccountsData: (state, action) => {
      state.accountsData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersTest.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { fetchAccountsData } = homeSlice.actions;

export default homeSlice.reducer;
