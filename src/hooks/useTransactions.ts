import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTransactions } from "../pages/Transactions/reducer";
import { AppDispatch, RootState } from "../store";

export const useTransactions = () => {
  const dispatch: AppDispatch = useDispatch();

  const [transactionID, setTransactionID] = useState("");
  const [status, setStatus] = useState([]);
  const [transactionType, setTransactionType] = useState([]);

  useEffect(() => {
    dispatch(fetchTransactions({ transactionID, status, transactionType }));
  }, [transactionID, status, transactionType, dispatch]);

  const { transactions } = useSelector(
    (state: RootState) => state.transactions
  );

  return {
    transactions,
    setTransactionID,
    setStatus,
    setTransactionType,
  };
};
