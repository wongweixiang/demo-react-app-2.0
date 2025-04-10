const ProfilePanel = ({
  fullName,
  email,
  phoneNo,
  profileImgUrl = "",
}: {
  fullName: string;
  email: string;
  phoneNo: string;
  profileImgUrl: string;
}) => {
  return (
    <div className="flex flex-col min-w-[300px] p-5 grey-border">
      {!!profileImgUrl ? (
        <img
          className="w-48 h-48 mx-auto mt-8 mb-12 rounded-full"
          src={profileImgUrl}
          alt="profile"
        />
      ) : (
        <div className="w-48 h-48 mx-auto mt-8 mb-12 rounded-full bg-slate-300"></div>
      )}

      <ProfileField label="Name" field={fullName} />
      <ProfileField label="Email" field={email} />
      <ProfileField label="Phone Number" field={phoneNo} />
    </div>
  );
};

const ProfileField = ({ label, field }: { label: string; field: string }) => {
  return (
    <>
      <span className="font-semibold">{label}</span>
      <span className="mb-5">{field}</span>
    </>
  );
};

export default ProfilePanel;
