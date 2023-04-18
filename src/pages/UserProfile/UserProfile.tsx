import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import ProfilePanel from "./ProfilePanel";
import MainPanel from "./MainPanel";

import { fetchUserData } from "./actions";
import { RootState } from "../../store";

const UserProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const { fullName, email, phoneNo, profileImgUrl, bankAccounts } = useSelector(
    (state: RootState) => state.userProfile
  );

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
