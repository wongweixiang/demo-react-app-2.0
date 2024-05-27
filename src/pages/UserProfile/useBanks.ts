import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "antd";

import { fetchBanks, addBankAccount, deleteBankAccount } from "./reducer";
import { AppDispatch, RootState } from "../../store";
import { useModalState } from "./useModalState";

export const useBanks = () => {
  const dispatch: AppDispatch = useDispatch();

  const [form] = Form.useForm();

  const { handleModalClosing } = useModalState();

  useEffect(() => {
    dispatch(fetchBanks());
  }, []);

  const handleAddBankAccount = (values: {
    accountNo: string;
    bankAbbrev: string;
  }) => {
    dispatch(addBankAccount(values)).then(() => {
      handleModalClosing();
      form.resetFields();
    });
  };

  const handleDeleteBankAccount = (id: number) =>
    dispatch(deleteBankAccount({ id }));

  const { banks } = useSelector((state: RootState) => state.userProfile);

  return {
    banks,
    form,
    handleAddBankAccount,
    handleDeleteBankAccount,
  };
};
