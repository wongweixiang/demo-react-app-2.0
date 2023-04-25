import apiClient from "../helpers/apiClient";

class HomeAPI {
  getAccounts = () => apiClient().get("accounts");
  sendTransaction = (params: {
    recipientId: number;
    walletId: number;
    amount: string;
  }) => apiClient().post("send", params);
}

export default new HomeAPI();
