import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
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
      <Body>
        <ProfilePanel
          profileImgUrl={profileImgUrl}
          fullName={fullName}
          email={email}
          phoneNo={phoneNo}
        />
        <MainPanel bankAccounts={bankAccounts} />
      </Body>
    </>
  );
};

const Body = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 1rem;
  margin-bottom: 10px;
`;

export default UserProfile;
