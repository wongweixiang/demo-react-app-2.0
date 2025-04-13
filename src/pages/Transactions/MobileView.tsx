import { Pagination, Card } from "antd";
import dayjs from "dayjs";

import StatusTag from "./StatusTag";
import { Transaction } from "../../services/fetchTransactions";
import { usePagination } from "../../hooks/usePagination";

const MobileView = ({ transactions }: { transactions: Transaction[] }) => {
  const { currentPage, pageSize, setCurrentPage } = usePagination();

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const transactionsOnCurrentPage = transactions.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-4 md:hidden">
      {transactionsOnCurrentPage.map((t: Transaction) => {
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
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={transactions.length}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default MobileView;
