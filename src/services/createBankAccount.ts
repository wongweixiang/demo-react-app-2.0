import API from "./API";

type CreateBankAccountBody = {
  accountNo: string;
  bankAbbrev: string;
};

type CreateBankAccountResponse = {
  message: string;
  account: {
    id: number;
    accountNo: string;
    bankAbbrev: string;
    verificationStatus: string;
  };
};

export const createBankAccount = async (
  body: CreateBankAccountBody
): Promise<CreateBankAccountResponse> => {
  return await API.post("/bank_account", body);
};
