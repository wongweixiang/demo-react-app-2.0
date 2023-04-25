import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userProfileAPI from "../../api/userProfile.api";
import { BankAccount, UserProfileState } from "./types";

export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async () => {
    const { data } = await userProfileAPI.getUserProfile();
    return data;
  }
);

export const fetchBanks = createAsyncThunk(
  "userProfile/fetchBanks",
  async () => {
    const { data } = await userProfileAPI.getBanks();
    return data;
  }
);

export const addBankAccount = createAsyncThunk(
  "userProfile/addBankAccount",
  async (params: { accountNo: string; bankAbbrev: string }) => {
    const { data } = await userProfileAPI.addBankAccount(params);
    return data;
  }
);

export const deleteBankAccount = createAsyncThunk(
  "userProfile/deleteBankAccount",
  async ({ id }: { id: number }) => {
    const { data } = await userProfileAPI.deleteBankAccount(id);
    return data;
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    fullName: "",
    email: "",
    phoneNo: "",
    profileImgUrl: "",
    bankAccounts: [],
    banks: [],
  } as UserProfileState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(fetchBanks.fulfilled, (state, action) => {
      state.banks = action.payload;
    });
    builder.addCase(addBankAccount.fulfilled, (state, action) => {
      state.bankAccounts = [...state.bankAccounts, action.payload.account];
    });
    builder.addCase(deleteBankAccount.fulfilled, (state, action) => {
      state.bankAccounts = state.bankAccounts.filter(
        (a: BankAccount) => a.id !== action.payload.id
      );
    });
  },
});

export default userProfileSlice.reducer;
