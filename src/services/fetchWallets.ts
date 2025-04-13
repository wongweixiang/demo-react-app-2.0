import API from "./API";

type Wallet = {
  walletId: number;
  currency: "sgd" | "usd";
  balance: string;
};

type FetchWalletsResponse = Array<Wallet>;

export const fetchWallets = async (): Promise<FetchWalletsResponse> => {
  return await API.get(`/wallets`);
};
