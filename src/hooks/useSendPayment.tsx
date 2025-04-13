import { Form, notification } from "antd";

import { useWallets } from "./useWallets";
import { sendPayment } from "../services/sendPayment";

export const useSendPayment = () => {
  const [form] = Form.useForm();

  const { wallets, refetch: refetchWallets } = useWallets();

  const openNotification = (payload: {
    message: string;
    details: Record<string, unknown>;
  }) => {
    const { message, details } = payload;
    const targetWallet = wallets.find((w) => w.walletId === details.walletId);

    notification.open({
      message: <b>{message}</b>,
      description: `${targetWallet?.currency.toUpperCase()}$${
        details.amount
      } has been sent`,
      duration: 2,
    });
  };

  const handleSendPayment = async (values: {
    recipientId: number;
    walletId: number;
    amount: string;
  }) => {
    const payload = await sendPayment(values);

    openNotification(payload);
    form.resetFields();
    refetchWallets();
  };

  return {
    form,
    openNotification,
    handleSendPayment,
  };
};
