import apiClient from "../helpers/apiClient";

class UserProfileAPI {
  getUserProfile = () => apiClient().get("/user_profile");
  addBankAccount = (params: { accountNo: string; bankAbbrev: string }) =>
    apiClient().post("/bank_account", params);
  deleteBankAccount = (id: number) => apiClient().delete(`/bank_account/${id}`);
}

export default new UserProfileAPI();
