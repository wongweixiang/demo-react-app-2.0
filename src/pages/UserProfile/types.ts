export type BankAccount = {
  id: number;
  accountNo: string;
  bankAbbrev: string;
  verificationStatus: string;
};

export type UserProfileState = {
  fullName: string;
  email: string;
  phoneNo: string;
  profileImgUrl: string;
  bankAccounts: BankAccount[];
  banks: { value: string; label: string }[];
};
