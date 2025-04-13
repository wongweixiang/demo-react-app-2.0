import { Card } from "antd";
import dayjs from "dayjs";

import StatusTag from "./StatusTag";
import { Transaction } from "../../services/fetchTransactions";

const MobileView = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <div className="flex flex-col gap-4 md:hidden">
      {transactions.map((t: Transaction) => {
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
