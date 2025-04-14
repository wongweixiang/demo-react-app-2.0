import { Skeleton } from "antd";
import { FC } from "react";

type ProfilePanelProps = {
  isLoading: boolean;
  fullName: string;
  email: string;
  phoneNo: string;
  profileImgUrl: string;
};

const ProfilePanel: FC<ProfilePanelProps> = ({
  isLoading,
  fullName,
  email,
  phoneNo,
  profileImgUrl = "",
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

      <ProfileField label="Name" field={fullName} isLoading={isLoading} />
      <ProfileField label="Email" field={email} isLoading={isLoading} />
      <ProfileField
        label="Phone Number"
        field={phoneNo}
        isLoading={isLoading}
      />
    </div>
  );
};

const ProfileField = ({
  label,
  field,
  isLoading,
}: {
  label: string;
  field: string;
  isLoading: boolean;
}) => {
  return (
    <div className="flex flex-col mb-5">
      <span className="font-semibold">{label}</span>
      {isLoading ? (
        <Skeleton.Input active size="small" />
      ) : (
        <span>{field}</span>
      )}
    </div>
  );
};

export default ProfilePanel;
