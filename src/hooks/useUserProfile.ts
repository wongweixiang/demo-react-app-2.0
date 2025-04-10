import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserProfile } from "../pages/UserProfile/reducer";
import { AppDispatch, RootState } from "../store";

export const useUserProfile = () => {
  const dispatch: AppDispatch = useDispatch();
  const { fullName, email, phoneNo, profileImgUrl, bankAccounts } = useSelector(
    (state: RootState) => state.userProfile
  );

  useEffect(() => {
    if (!fullName) dispatch(fetchUserProfile());
  }, [fullName, dispatch]);

  return { fullName, email, phoneNo, profileImgUrl, bankAccounts };
};
