import API from "./API";

type SendPaymentParams = {
  recipientId: number;
  walletId: number;
  amount: string;
};

type SendPaymentResponse = {
  message: string;
  details: { walletId: number; amount: string };
};

export const sendPayment = async (
  params: SendPaymentParams
): Promise<SendPaymentResponse> => {
  return await API.post("/send", params);
};
