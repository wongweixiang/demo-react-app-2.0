import { useEffect } from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DollarTwoTone } from "@ant-design/icons";
import styled from "@emotion/styled";

import { fetchAccountsData } from "./actions";
import { Account } from "./types";
import { RootState } from "../../store";

const username = "Test User One";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccountsData());
  }, []);

  const { accountsData } = useSelector((state: RootState) => state.home);

  return (
    <>
      <h1>Hello, {username}!</h1>

      <h3>My Wallets</h3>
      <CardContainer>
        {accountsData.map((a: Account) => (
          <WalletCard
            key={a.accountId}
            title={
              <Title>
                <DollarTwoTone style={{ fontSize: "24px" }} />
                {a.currency}
              </Title>
            }
          >
            <CardBody>
              <b>Balance:</b>
              <b style={{ fontSize: "32px" }}>${a.balance}</b>
            </CardBody>
          </WalletCard>
        ))}
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  height: 180px;
  width: 100%;
  gap: 1rem;
`;

const WalletCard = styled(Card)`
  flex-grow: 1;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  gap: 0.5rem;
`;

export default Home;
