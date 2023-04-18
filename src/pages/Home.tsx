import { Card } from "antd";
import { DollarTwoTone } from "@ant-design/icons";
import styled from "@emotion/styled";

const username = "Test User One";

const accountsData = [
  {
    accountId: 1,
    currency: "sgd",
    balance: "130.0",
    type: "PersonalAccount",
  },
  {
    accountId: 2,
    currency: "usd",
    balance: "50.0",
    type: "PersonalAccount",
  },
];

const Home = () => {
  return (
    <>
      <h1>Hello, {username}!</h1>
      <h3>My Wallets</h3>
      <CardContainer>
        {accountsData.map((a) => (
          <WalletCard
            title={
              <Title>
                <DollarTwoTone style={{ fontSize: "24px" }} />
                {a.currency}
              </Title>
            }
          >
            {a.balance}
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

const Title = styled.div`
  display: flex;
  text-transform: uppercase;
  gap: 0.5rem;
`;

export default Home;
