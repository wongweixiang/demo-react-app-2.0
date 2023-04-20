import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userProfileAPI from "../../api/userProfile.api";

export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async () => {
    const { data } = await userProfileAPI.getUserProfile();
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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export default userProfileSlice.reducer;
