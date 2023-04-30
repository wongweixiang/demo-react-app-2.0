import { useEffect } from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DollarTwoTone } from "@ant-design/icons";
import styled from "@emotion/styled";

import SendForm from "./SendForm";
import { fetchWallets } from "./reducer";
import { fetchUserProfile } from "../UserProfile/reducer";
import { Wallet } from "./types";
import { AppDispatch, RootState } from "../../store";
import { SCREEN_SIZES } from "../../constants";

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
      <CardContainer>
        {wallets.map((w: Wallet) => (
          <WalletCard
            key={w.walletId}
            title={
              <Title>
                <DollarTwoTone style={{ fontSize: "24px" }} />
                {w.currency}
              </Title>
            }
          >
            <CardBody>
              <b>Balance:</b>
              <b style={{ fontSize: "32px" }}>${w.balance}</b>
            </CardBody>
          </WalletCard>
        ))}
      </CardContainer>
      <SendForm />
    </>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${SCREEN_SIZES.SMALL}) {
    flex-direction: row;
  }

  height: auto;
  width: 100%;
  gap: 1rem;
`;

const WalletCard = styled(Card)`
  flex-grow: 1;
  border-color: #d9d9d9;
  user-select: none;

  .ant-card-head {
    background-color: #001529;
  }
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  color: #99d6ff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  gap: 0.5rem;
`;

export default Home;
