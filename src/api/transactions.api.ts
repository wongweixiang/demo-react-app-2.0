import apiClient from "../helpers/apiClient";

class TransactionsAPI {
  getTransactions = (params: Record<string, unknown>) => {
    const { transactionID, status, transactionType } = params;
    return apiClient().get(
      `/transactions?transactionID=${transactionID}&status=${status}&transactionType=${transactionType}`
    );
  };
}

export default new TransactionsAPI();
