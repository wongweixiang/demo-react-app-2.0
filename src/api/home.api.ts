import apiClient from "../helpers/apiClient";

class HomeAPI {
  getWallets = () => apiClient().get("/wallets");
  getContacts = () => apiClient().get("/contacts");
  sendTransaction = (params: {
    recipientId: number;
    walletId: number;
    amount: string;
  }) => apiClient().post("/send", params);
}

export default new HomeAPI();
