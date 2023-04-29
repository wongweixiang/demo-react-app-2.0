export type Transaction = {
  id: string;
  createdAt: string;
  type:
    | "Bank Transfer In"
    | "Bank Transfer Out"
    | "Payment Received"
    | "Payment Sent";
  amount: {
    direction: "-" | "+";
    currency: "usd" | "sgd";
    netAmount: string;
  };
  status: "pending" | "completed" | "cancelled" | "expired";
};
