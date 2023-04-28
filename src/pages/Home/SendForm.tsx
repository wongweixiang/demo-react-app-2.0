import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Select, Input, Button, Typography, Modal } from "antd";
import styled from "@emotion/styled";

import { fetchContacts, sendPayment, fetchAccountsData } from "./reducer";
import { AppDispatch, RootState } from "../../store";
import { SCREEN_SIZES } from "../../constants";

const { Text } = Typography;

const Send = () => {
  const dispatch: AppDispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const { accountsData, contacts } = useSelector(
    (state: RootState) => state.home
  );

  return (
    <>
      <h5>Send Payments</h5>
      <Panel>
        <SubPanel style={{ marginBottom: "30px" }}>
          <Text>Simulate sending a transaction from your wallets!</Text>
        </SubPanel>
        <SubPanel>
          <Form
            form={form}
            layout="vertical"
            onFinish={(values) => {
              Modal.confirm({
                title: "Confirm payment",
                content: "This payment will be mocked (using browser cache)",
                onOk: () =>
                  dispatch(sendPayment(values)).then(() => {
                    form.resetFields();
                    dispatch(fetchAccountsData());
                  }),
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
              rules={[
                {
                  message: "Maximum of 2 decimal places",
                  pattern: /^\d+\.?\d{1,2}$/,
                },
                {
                  required: true,
                  message: "Please input amount",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const selectedWallet = accountsData?.find(
                      (a) => a.accountId === getFieldValue("walletId")
                    );

                    if (!selectedWallet) return;

                    if (value <= +(selectedWallet?.balance || 0)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        `Can only transfer a maximum of ${selectedWallet?.currency.toUpperCase()}$${
                          selectedWallet?.balance
                        }`
                      )
                    );
                  },
                }),
              ]}
            >
              <Input
                prefix="$"
                type="number"
                placeholder="Input amount to be sent"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </SubPanel>
      </Panel>
    </>
  );
};

export default Send;

const Panel = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${SCREEN_SIZES.MEDIUM}) {
    flex-direction: row;
  }

  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SubPanel = styled.div`
  flex-grow: 1;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
`;
