const home = (
  state = {
    accountsData: [],
  },
  action: any
) => {
  switch (action.type) {
    case "FETCH_ACCOUNTS_DATA":
      return {
        ...state,
        accountsData: action.accountsData,
      };
    default:
      return state;
  }
};

export default home;
