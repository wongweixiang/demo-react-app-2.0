import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserProfile } from "./reducer";
import { AppDispatch, RootState } from "../../store";

export const useUserProfile = () => {
  const dispatch: AppDispatch = useDispatch();
  const { fullName, email, phoneNo, profileImgUrl, bankAccounts } = useSelector(
    (state: RootState) => state.userProfile
  );

  useEffect(() => {
    if (!fullName) dispatch(fetchUserProfile());
  }, []);

  return { fullName, email, phoneNo, profileImgUrl, bankAccounts };
};
