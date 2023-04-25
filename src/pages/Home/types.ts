export type Account = {
  accountId: number;
  currency: string;
  balance: string;
};

export type Contact = {
  id: number;
  name: string;
  email: string;
};

export type HomeState = {
  accountsData: Account[];
  contacts: Contact[];
};
