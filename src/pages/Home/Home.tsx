import { Card } from "antd";
import { DollarTwoTone } from "@ant-design/icons";

import SendForm from "./SendForm";
import { Wallet } from "./types";
import { useUserProfile } from "../../hooks/useUserProfile";
import { useWallets } from "../../hooks/useWallets";

const Home = () => {
  const { fullName } = useUserProfile();

  const { wallets } = useWallets();

  return (
    <div className="max-w-[80rem]">
      <h1>Hello, {fullName}!</h1>

      <h3>My Wallets</h3>
      <div className="flex flex-col md:flex-row w-full h-auto gap-4">
        {wallets.map((w: Wallet) => (
          <Card
            className="h-48 flex-grow border-gray-300 card-head"
            key={w.walletId}
            title={
              <div className="flex items-center text-sky-300 text-2xl font-bold uppercase gap-2">
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
        ))}
      </div>
      <SendForm />
    </div>
  );
};

export default Home;
