import { useDispatch, useSelector } from "react-redux";

import { Pagination, Card } from "antd";
import dayjs from "dayjs";

import { AppDispatch, RootState } from "../../store";
import StatusTag from "./StatusTag";
import { Transaction } from "./types";
import { updatePage } from "./reducer";

const MobileView = ({ transactions }: { transactions: Transaction[] }) => {
  const dispatch: AppDispatch = useDispatch();
  const { currentPage, pageSize } = useSelector(
    (state: RootState) => state.transactions.pagination
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const transactionsOnCurrentPage = transactions.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-4 sm:hidden">
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
            <div className="flex justify-center content-end items-end box-border">
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
        onChange={(page) => dispatch(updatePage(page))}
      />
    </div>
  );
};

export default MobileView;
