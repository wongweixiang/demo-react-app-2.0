export type Account = {
  accountId: number;
  currency: string;
  balance: string;
};

export type HomeState = {
  accountsData: Account[];
};
