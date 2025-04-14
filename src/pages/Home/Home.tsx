import { Card } from "antd";
import Skeleton from "../../common/Skeleton";
import { DollarTwoTone } from "@ant-design/icons";

import SendForm from "./SendForm";
import { Wallet } from "./types";
import { useUserProfile } from "../../hooks/useUserProfile";
import { useWallets } from "../../hooks/useWallets";

const Home = () => {
  const { fullName } = useUserProfile();

  const { wallets, isFetching } = useWallets();

  return (
    <div className="max-w-[80rem]">
      <h1>Hello, {fullName}!</h1>

      <h3>My Wallets</h3>
      <div className="flex flex-col md:flex-row w-full h-auto gap-4">
        {!isFetching
          ? wallets?.map((w: Wallet) => (
              <Card
                className="h-48 flex-grow border-gray-300 card-head theme"
                key={w.walletId}
                title={
                  <div className="flex items-center text-2xl font-bold uppercase gap-2">
                    <DollarTwoTone className="text-xl" />
                    {w.currency}
                  </div>
                }
              >
                <div className="flex justify-between">
                  <b>Balance:</b>
                  <b className="text-3xl">${w.balance}</b>
                </div>
              </Card>
            ))
          : Array(2)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-full flex-grow h-48 rounded-lg bg-slate-300"
                />
              ))}
      </div>
      <SendForm />
    </div>
  );
};

export default Home;
