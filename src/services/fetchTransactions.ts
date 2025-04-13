import API from "./API";

type Status = "pending" | "completed" | "cancelled" | "expired";

type TransactionType =
  | "Bank Transfer In"
  | "Bank Transfer Out"
  | "Payment Received"
  | "Payment Sent";

export type Transaction = {
  id: string;
  createdAt: string;
  type: TransactionType;
  amount: {
    direction: "-" | "+";
    currency: "usd" | "sgd";
    netAmount: string;
  };
  status: Status;
};

type FetchTransactionsParams = {
  transactionID: string;
  status: Array<Status>;
  transactionType: Array<TransactionType>;
};

type FetchTransactionsResponse = Array<Transaction>;

export const fetchTransactions = async (
  params: FetchTransactionsParams
): Promise<FetchTransactionsResponse> => {
  console.log("params", params);
  return await API.get("/transactions", { searchParams: params });
};
