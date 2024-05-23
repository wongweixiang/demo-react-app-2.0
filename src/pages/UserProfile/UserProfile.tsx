import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfilePanel from "./ProfilePanel";
import MainPanel from "./MainPanel";

import { fetchUserProfile } from "./reducer";
import { AppDispatch, RootState } from "../../store";

const UserProfile = () => {
  const dispatch: AppDispatch = useDispatch();
  const { fullName, email, phoneNo, profileImgUrl, bankAccounts } = useSelector(
    (state: RootState) => state.userProfile
  );

  useEffect(() => {
    if (!fullName) dispatch(fetchUserProfile());
  }, []);

  return (
    <>
      <h3>User Profile</h3>
      <div className="flex flex-col lg:flex-row h-full w-full mb-3 gap-4">
        <ProfilePanel
          profileImgUrl={profileImgUrl}
          fullName={fullName}
          email={email}
          phoneNo={phoneNo}
        />
        <MainPanel bankAccounts={bankAccounts} />
      </div>
    </>
  );
};

export default UserProfile;
