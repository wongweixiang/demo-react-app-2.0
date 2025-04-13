import API from "./API";

type DeleteBankAccountResponse = {
  message: string;
  id: number;
};

export const deleteBankAccount = async ({
  id,
}: {
  id: number;
}): Promise<DeleteBankAccountResponse> => {
  return await API.delete(`/bank_account/${id}`);
};
