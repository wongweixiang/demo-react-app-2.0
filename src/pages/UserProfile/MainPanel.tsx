import styled from "@emotion/styled";
import { Card, Button, Typography, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

const MainPanel = ({
  bankAccounts,
}: {
  bankAccounts: Record<string, string>[];
}) => {
  return (
    <Panel>
      <Title>Bank Accounts</Title>
      <AccountsContainer>
        {bankAccounts.map((a) => (
          <AccountCard
            title={a.bankAbbrev}
            extra={
              <Button>
                <DeleteOutlined />
              </Button>
            }
          >
            <CardBody>
              <AccountField>
                <Text>Account Number</Text>
                <Text strong>{a.accountNo}</Text>
              </AccountField>
              <StatusTag status={a.verificationStatus} />
            </CardBody>
          </AccountCard>
        ))}
      </AccountsContainer>
    </Panel>
  );
};

const StatusTag = ({ status }: { status: string }) => {
  const colourMapping: Record<string, string> = {
    verified: "green",
    rejected: "red",
  };

  return (
    <Tag color={colourMapping[status]} style={{ textTransform: "capitalize" }}>
      {status}
    </Tag>
  );
};

export default MainPanel;

const Panel = styled.div`
  flex-grow: 1;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 20px;
`;

const Title = styled.h5`
  margin: 0px;
`;

const AccountsContainer = styled.div`
  display: flex;
  margin-top: 15px;
  height: 180px;
  width: 100%;
  gap: 1rem;
`;

const AccountCard = styled(Card)`
  flex-grow: 1;
`;

const CardBody = styled.div`
  display: flex;
  min-width: 160px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-end;
  align-content: flex-end;
`;

const AccountField = styled.div`
  display: flex;
  flex-direction: column;
`;
