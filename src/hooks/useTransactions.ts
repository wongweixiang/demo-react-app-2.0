import { useState } from "react";

import { fetchTransactions } from "../services/fetchTransactions";
import { useQuery } from "@tanstack/react-query";

export const useTransactions = () => {
  const [transactionID, setTransactionID] = useState("");
  const [status, setStatus] = useState([]);
  const [transactionType, setTransactionType] = useState([]);

  const { data } = useQuery({
    queryKey: ["transactions", transactionID, status, transactionType],
    queryFn: async () => {
      return await fetchTransactions({
        transactionID,
        status,
        transactionType,
      });
    },
  });

  return {
    transactions: data ?? [],
    setTransactionID,
    setStatus,
    setTransactionType,
  };
};
