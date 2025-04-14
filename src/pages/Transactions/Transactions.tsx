import { Select, Input, Pagination } from "antd";

import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

import { useTransactions } from "../../hooks/useTransactions";
import { usePagination } from "../../hooks/usePagination";

const { Search } = Input;

const Transactions = () => {
  const { currentPage, pageSize, setCurrentPage } = usePagination();

  const {
    transactions,
    pagination,
    setTransactionID,
    setStatus,
    setTransactionType,
  } = useTransactions();

  return (
    <>
      <h3>Transactions</h3>
      <div className="flex flex-col min-w-[300px] p-0 sm:p-5 no-border sm:grey-border box-border">
        <div className="bg-gray-50 dark:bg-slate-600 flex flex-col items-stretch md:grid md:grid-cols-3 xl:grid-cols-4 gap-2 rounded-lg p-5 box-border mb-3">
          <Search
            placeholder="Search by transaction ID"
            onSearch={(e) => setTransactionID(e)}
          />
          <Select
            placeholder="Select a status"
            mode="multiple"
            onChange={(e) => setStatus(e)}
            options={statuses.map((s) => {
              return {
                value: s,
                label: s.charAt(0).toUpperCase() + s.slice(1),
              };
            })}
          />
          <Select
            placeholder="Select a transaction type"
            mode="multiple"
            onChange={(e) => setTransactionType(e)}
            options={transactionTypes.map((t) => {
              return { value: t, label: t };
            })}
          />
        </div>
        <DesktopView transactions={transactions} />
        <MobileView transactions={transactions} />
        <div className="w-full dark:bg-slate-300 flex items-center justify-start md:justify-end mt-3 p-3 rounded-lg">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={pagination?.total ?? 0}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default Transactions;

const statuses = ["completed", "cancelled", "pending", "expired"];

const transactionTypes = [
  "Bank Transfer In",
  "Bank Transfer Out",
  "Payment Sent",
  "Payment Received",
];
