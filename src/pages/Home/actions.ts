export const fetchAccountsData = () => ({
  type: "FETCH_ACCOUNTS_DATA",
  accountsData: [
    {
      accountId: 1,
      currency: "sgd",
      balance: "130.0",
      type: "PersonalAccount",
    },
    {
      accountId: 2,
      currency: "usd",
      balance: "50.0",
      type: "PersonalAccount",
    },
  ],
});
