import styled from "@emotion/styled";
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
    <Panel>
      <ProfileImage src={profileImgUrl} alt="profile-picture" />
      <ProfileField label="Name" field={fullName} />
      <ProfileField label="Email" field={email} />
      <ProfileField label="Phone Number" field={phoneNo} />
    </Panel>
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

const Panel = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 300px;

  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ProfileImage = styled.img`
  display: block;
  margin-top: 30px;
  margin-bottom: 50px;

  margin-left: auto;
  margin-right: auto;

  width: 180px;
  border-radius: 90px;
`;
