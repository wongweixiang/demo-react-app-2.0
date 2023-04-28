import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import {
  Card,
  Button,
  Typography,
  Tag,
  Modal,
  Form,
  Tooltip,
  Input,
  Select,
} from "antd";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

import { addBankAccount, deleteBankAccount, fetchBanks } from "./reducer";
import { AppDispatch, RootState } from "../../store";
import { BankAccount } from "./types";
import SvgMapper from "../../helpers/SvgMapper";
import { SCREEN_SIZES } from "../../constants";

const { Text } = Typography;

const MAX_NUMBER = 5;

const MainPanel = ({ bankAccounts }: { bankAccounts: BankAccount[] }) => {
  const dispatch: AppDispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchBanks());
  }, []);

  const { banks } = useSelector((state: RootState) => state.userProfile);

  return (
    <Panel>
      <Title>Bank Accounts</Title>
      <Tooltip
        title={`You may add a maximum of ${MAX_NUMBER} accounts`}
        placement="bottomLeft"
      >
        <Button
          disabled={bankAccounts.length >= MAX_NUMBER}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleOutlined />
          Add Account
        </Button>
      </Tooltip>
      <AccountsContainer>
        {bankAccounts.map((a) => (
          <AccountCard key={a.id} account={a} />
        ))}
      </AccountsContainer>
      <Modal title="Add a bank account" open={isModalOpen} footer={[]}>
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            dispatch(addBankAccount(values)).then(() => {
              setIsModalOpen(false);
              form.resetFields();
            });
          }}
        >
          <Form.Item
            label="Bank Name"
            name="bankAbbrev"
            rules={[{ required: true, message: "Field required" }]}
          >
            <Select
              placeholder="Please choose a bank"
              options={banks.map((b) => ({
                value: b.value,
                label: (
                  <Option>
                    <SvgMapper bankAbbrev={b.value} width="60px" />
                    <span>{b.label}</span>
                  </Option>
                ),
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Bank Account Number"
            name="accountNo"
            rules={[
              {
                required: true,
                message: "Account number must be 9 or 10 digits",
                pattern: /^\d{9,10}$/,
              },
            ]}
          >
            <Input type="number" placeholder="Enter a 9 or 10 digit number" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>{" "}
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
        </Form>
      </Modal>
    </Panel>
  );
};

const AccountCard = ({ account }: { account: BankAccount }) => {
  const dispatch: AppDispatch = useDispatch();

  const { bankAbbrev, id, accountNo, verificationStatus } = account;
  return (
    <Card
      style={{ flexGrow: 1 }}
      title={<SvgMapper bankAbbrev={bankAbbrev} />}
      extra={
        <Button
          onClick={() =>
            Modal.confirm({
              title: "Confirm deletion",
              content: "Are you sure you wish to delete this bank account?",
              onOk: () => dispatch(deleteBankAccount({ id })),
            })
          }
        >
          <DeleteOutlined />
        </Button>
      }
    >
      <CardBody>
        <AccountField>
          <Text>Account Number</Text>
          <Text strong>{accountNo}</Text>
        </AccountField>
        <StatusTag status={verificationStatus} />
      </CardBody>
    </Card>
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

  min-width: 300px;
  box-sizing: border-box;
`;

const Title = styled.h5`
  margin: 0px;
`;

const AccountsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${SCREEN_SIZES.SMALL}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: ${SCREEN_SIZES.EXTRA_LARGE}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  margin-top: 15px;
  height: auto;
  width: 100%;
  gap: 1rem;
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

const Option = styled.div`
  display: flex;
  justify-content: space-between;
`;
