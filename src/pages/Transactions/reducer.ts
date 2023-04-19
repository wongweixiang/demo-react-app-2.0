const transactions = (
  state = {
    transactions: [],
  },
  action: any
) => {
  switch (action.type) {
    case "FETCH_TRANSACTIONS":
      return {
        ...state,
        transactions: action.transactions,
      };
    default:
      return state;
  }
};

export default transactions;
