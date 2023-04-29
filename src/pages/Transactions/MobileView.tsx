import { useDispatch, useSelector } from "react-redux";

import styled from "@emotion/styled";
import { Pagination, Card } from "antd";
import dayjs from "dayjs";

import { AppDispatch, RootState } from "../../store";
import { SCREEN_SIZES } from "../../constants";
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
    <View>
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
            <CardBody>
              <div>
                <b>{type}</b>
                <div>ID: {id}</div>
              </div>
              <div>{dayjs(createdAt).format("DD MMM YYYY, HH:mm")}</div>
            </CardBody>
          </Card>
        );
      })}
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={transactions.length}
        onChange={(page) => dispatch(updatePage(page))}
      />
    </View>
  );
};

export default MobileView;

const View = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: ${SCREEN_SIZES.SMALL}) {
    display: none;
  }
`;

const CardBody = styled.div`
  display: flex;

  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
`;
