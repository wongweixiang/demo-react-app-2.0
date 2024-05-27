import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, notification } from "antd";

import {
  fetchContacts,
  sendPayment,
  fetchWallets,
} from "../pages/Home/reducer";
import { AppDispatch, RootState } from "../store";
import { useWallets } from "./useWallets";

export const useSendPayment = () => {
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const { contacts } = useSelector((state: RootState) => state.home);
  const { wallets } = useWallets();

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

  const handleSendPayment = (values: {
    recipientId: number;
    walletId: number;
    amount: string;
  }) =>
    dispatch(sendPayment(values)).then(({ payload }) => {
      openNotification(payload);
      form.resetFields();
      dispatch(fetchWallets());
    });

  return {
    form,
    contacts,
    openNotification,
    handleSendPayment,
  };
};
