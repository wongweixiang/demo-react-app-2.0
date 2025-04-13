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
  page: number;
  limit: number;
};

type FetchTransactionsResponse = {
  data: Array<Transaction>;
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
};

export const fetchTransactions = async (
  params: FetchTransactionsParams
): Promise<FetchTransactionsResponse> => {
  const searchParams = {
    ...params,
    page: String(params.page),
    limit: String(params.limit),
  };

  return await API.get("/transactions", { searchParams });
};
