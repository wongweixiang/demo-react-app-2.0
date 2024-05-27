import ProfilePanel from "./ProfilePanel";
import MainPanel from "./MainPanel";

import { useUserProfile } from "./useUserProfile";

const UserProfile = () => {
  const { fullName, email, phoneNo, profileImgUrl, bankAccounts } =
    useUserProfile();

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
