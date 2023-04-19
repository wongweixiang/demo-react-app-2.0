export const fetchAccountsData = () => ({
  type: "FETCH_ACCOUNTS_DATA",
  accountsData: [
    {
      accountId: 1,
      currency: "sgd",
      balance: "830.00",
      type: "PersonalAccount",
    },
    {
      accountId: 2,
      currency: "usd",
      balance: "750.00",
      type: "PersonalAccount",
    },
  ],
});
