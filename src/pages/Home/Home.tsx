import { useEffect } from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DollarTwoTone } from "@ant-design/icons";

import SendForm from "./SendForm";
import { fetchWallets } from "./reducer";
import { fetchUserProfile } from "../UserProfile/reducer";
import { Wallet } from "./types";
import { AppDispatch, RootState } from "../../store";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
    dispatch(fetchWallets());
  }, []);

  const { wallets } = useSelector((state: RootState) => state.home);
  const { fullName } = useSelector((state: RootState) => state.userProfile);

  return (
    <>
      <h1>Hello, {fullName}!</h1>

      <h3>My Wallets</h3>
      <div className="flex flex-col sm:flex-row w-full h-auto gap-4">
        {wallets.map((w: Wallet) => (
          <Card
            className="flex-grow border-gray-300 card-head"
            key={w.walletId}
            title={
              <div className="flex items-center text-sky-300 text-2xl font-bold uppercase gap-2">
                <DollarTwoTone style={{ fontSize: "24px" }} />
                {w.currency}
              </div>
            }
          >
            <div className="flex justify-between">
              <b>Balance:</b>
              <b style={{ fontSize: "32px" }}>${w.balance}</b>
            </div>
          </Card>
        ))}
      </div>
      <SendForm />
    </>
  );
};

export default Home;
