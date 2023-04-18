import styled from "@emotion/styled";
import ProfilePanel from "./ProfilePanel";
import MainPanel from "./MainPanel";

const userData = {
  fullName: "Test User One",
  email: "test_user@gmail.com",
  phoneNo: "811911112",
  profileImgUrl: "https://picsum.photos/id/203/300",
  bankAccounts: [
    {
      accountNo: "0122368991",
      bankAbbrev: "DBS",
      verificationStatus: "verified",
    },
    {
      accountNo: "0744368552",
      bankAbbrev: "UOB",
      verificationStatus: "pending",
    },
  ],
};

const UserProfile = () => {
  const { fullName, email, phoneNo, profileImgUrl, bankAccounts } = userData;

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
