export type Wallet = {
  walletId: number;
  currency: string;
  balance: string;
};

export type Contact = {
  id: number;
  name: string;
  email: string;
};

export type HomeState = {
  wallets: Wallet[];
  contacts: Contact[];
};
