import { useState } from "react";

import { fetchTransactions } from "../services/fetchTransactions";
import { useQuery } from "@tanstack/react-query";
import { usePagination } from "./usePagination";

export const useTransactions = () => {
  const [transactionID, setTransactionID] = useState("");
  const [status, setStatus] = useState([]);
  const [transactionType, setTransactionType] = useState([]);

  const { currentPage, pageSize } = usePagination();

  const { data: transactions } = useQuery({
    queryKey: [
      "transactions",
      currentPage,
      pageSize,
      transactionID,
      status,
      transactionType,
    ],
    queryFn: async () => {
      const response = await fetchTransactions({
        transactionID,
        status,
        transactionType,
        page: currentPage,
        limit: pageSize,
      });

      return response;
    },
  });

  return {
    transactions: transactions?.data ?? [],
    pagination: transactions?.pagination,
    setTransactionID,
    setStatus,
    setTransactionType,
  };
};
