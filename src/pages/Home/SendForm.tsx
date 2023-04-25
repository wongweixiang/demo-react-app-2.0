import { useDispatch } from "react-redux";
import { Form, Select, Input, Button, Typography } from "antd";
import styled from "@emotion/styled";

import { sendPayment } from "./reducer";
import { Account } from "./types";
import { AppDispatch } from "../../store";

const { Text } = Typography;

const Send = ({ accountsData }: { accountsData: Account[] }) => {
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();

  const contacts = [
    {
      id: 101,
      name: "Tony",
      email: "tony_stark@gmail.com",
    },
    {
      id: 102,
      name: "Steve",
      email: "steve.rogers@avengers.org",
    },
    {
      id: 103,
      name: "Natasha",
      email: "natasha.romanoff@redroom.ussr",
    },
    {
      id: 104,
      name: "Wanda",
      email: "wanda_maximoff@vision.town",
    },
  ];

  return (
    <>
      <h5>Send Payments</h5>
      <Panel>
        <div style={{ flexGrow: 1 }}>
          <Text>Simulate sending a transaction from your wallets!</Text>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Form
            form={form}
            layout="vertical"
            onFinish={(values) => {
              dispatch(sendPayment(values)).then(() => {
                form.resetFields();
              });
            }}
          >
            <Form.Item
              label="From Wallet"
              name="walletId"
              rules={[{ required: true, message: "Field required" }]}
            >
              <Select
                placeholder="Please choose a wallet"
                options={accountsData.map((a) => ({
                  value: a.accountId,
                  label: (
                    <Option>
                      <b>{a.currency.toUpperCase()}</b>{" "}
                      <span>${a.balance}</span>
                    </Option>
                  ),
                }))}
              />
            </Form.Item>
            <Form.Item
              label="To Recipient"
              name="recipientId"
              rules={[{ required: true, message: "Field required" }]}
            >
              <Select
                placeholder="Please choose a contact"
                options={contacts.map((c) => ({
                  value: c.id,
                  label: (
                    <Option>
                      <span>{c.name}</span> <b>{c.email}</b>
                    </Option>
                  ),
                }))}
              />
            </Form.Item>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[{ required: true, message: "Field required" }]}
            >
              <Input prefix="$" placeholder="Input amount to be sent" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Panel>
    </>
  );
};

export default Send;

const Panel = styled.div`
  display: flex;

  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
`;
