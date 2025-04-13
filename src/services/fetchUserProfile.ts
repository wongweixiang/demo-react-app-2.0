import API from "./API";

type BankAccount = {
  id: number;
  accountNo: string;
  bankAbbrev: string;
  verificationStatus: "verified" | "pending" | "rejected";
};

type FetchUserProfileResponse = {
  fullName: string;
  email: string;
  phoneNo: string;
  profileImgUrl: string;
  bankAccounts: Array<BankAccount>;
};

export type UserProfile = FetchUserProfileResponse;

export const fetchUserProfile = async (): Promise<FetchUserProfileResponse> => {
  return await API.get("/user_profile");
};
