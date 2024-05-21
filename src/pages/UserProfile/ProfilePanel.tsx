import { Typography } from "antd";

const { Text } = Typography;

const ProfilePanel = ({
  fullName,
  email,
  phoneNo,
  profileImgUrl,
}: {
  fullName: string;
  email: string;
  phoneNo: string;
  profileImgUrl: string;
}) => {
  return (
    <div className="flex flex-col min-w-[300px] p-5 grey-border">
      <img
        className="w-48 mx-auto mt-8 mb-12 rounded-full"
        src={profileImgUrl}
        alt="profile-picture"
      />
      <ProfileField label="Name" field={fullName} />
      <ProfileField label="Email" field={email} />
      <ProfileField label="Phone Number" field={phoneNo} />
    </div>
  );
};

const ProfileField = ({ label, field }: { label: string; field: string }) => {
  return (
    <>
      <Text strong>{label}</Text>
      <Text style={{ marginBottom: "20px" }}>{field}</Text>
    </>
  );
};

export default ProfilePanel;
