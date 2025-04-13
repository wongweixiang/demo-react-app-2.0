import { Form } from "antd";

import { useModalState } from "./useModalState";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchBanks } from "../services/fetchBanks";
import { createBankAccount } from "../services/createBankAccount";
import { UserProfile } from "../services/fetchUserProfile";
import { deleteBankAccount } from "../services/deleteBankAccount";

export const useBanks = () => {
  const queryClient = useQueryClient();

  const [form] = Form.useForm();

  const { handleModalClosing } = useModalState();

  const { data: banks } = useQuery({
    queryKey: ["banks"],
    queryFn: async () => {
      return await fetchBanks();
    },
  });

  const handleAddBankAccount = async (values: {
    accountNo: string;
    bankAbbrev: string;
  }) => {
    const response = await createBankAccount(values);

    queryClient.setQueryData(["userProfile"], (prev: UserProfile) => {
      return {
        ...prev,
        bankAccounts: [...prev.bankAccounts, response.account],
      };
    });

    handleModalClosing();
    form.resetFields();
  };

  const handleDeleteBankAccount = async (id: number) => {
    const response = await deleteBankAccount({ id });

    queryClient.setQueryData(["userProfile"], (prev: UserProfile) => {
      return {
        ...prev,
        bankAccounts: prev.bankAccounts.filter(
          (account) => account.id !== response.id
        ),
      };
    });
  };

  return {
    banks: banks ?? [],
    form,
    handleAddBankAccount,
    handleDeleteBankAccount,
  };
};
