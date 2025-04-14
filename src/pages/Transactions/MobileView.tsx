import { Card } from "antd";
import dayjs from "dayjs";

import { Spin } from "antd";

import StatusTag from "./StatusTag";
import { Transaction } from "../../services/fetchTransactions";
import { FC } from "react";

type MobileViewProps = {
  transactions: Transaction[];
  isLoading: boolean;
};
const MobileView: FC<MobileViewProps> = ({ transactions, isLoading }) => {
  return (
    <div className="flex flex-col gap-4 md:hidden">
      {isLoading && (
        <div className="w-full h-64 flex items-center justify-center">
          <Spin />
        </div>
      )}
      {transactions?.map((t: Transaction) => {
        const { id, status, amount, type, createdAt } = t;
        const { direction, currency, netAmount } = amount;

        return (
          <Card
            key={id}
            title={
              <b>{`${direction} ${currency.toUpperCase()}${netAmount}`}</b>
            }
            extra={<StatusTag status={status} />}
          >
            <div className="flex justify-between content-end items-end box-border">
              <div>
                <b>{type}</b>
                <div>ID: {id}</div>
              </div>
              <div>{dayjs(createdAt).format("DD MMM YYYY, HH:mm")}</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default MobileView;
