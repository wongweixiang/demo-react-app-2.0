import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchWallets } from "../pages/Home/reducer";
import { AppDispatch, RootState } from "../store";

export const useWallets = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWallets());
  }, []);

  const { wallets } = useSelector((state: RootState) => state.home);

  return { wallets };
};
