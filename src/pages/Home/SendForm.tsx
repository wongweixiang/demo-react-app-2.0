import { Form, Select, Input, Button, Typography, Modal } from "antd";

import { Wallet } from "./types";
import { useWallets } from "../../hooks/useWallets";
import { useSendPayment } from "../../hooks/useSendPayment";

const { Text } = Typography;

const Send = () => {
  const { wallets } = useWallets();

  const { form, contacts, handleSendPayment } = useSendPayment();

  return (
    <>
      <h5>Send Payments</h5>
      <div className="flex flex-col md:flex-row p-5 grey-border">
        <div className="flex-grow mb-8">
          <Text>Simulate sending a transaction from your wallets!</Text>
        </div>
        <div className="flex-grow">
          <Form
            form={form}
            layout="vertical"
            onFinish={(values) => {
              Modal.confirm({
                title: "Confirm payment",
                content: "This payment will be mocked (using browser cache)",
                onOk: () => handleSendPayment(values),
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
                options={wallets.map((w: Wallet) => ({
                  value: w.walletId,
                  label: (
                    <div className="flex flex-col">
                      <b>{w.currency.toUpperCase()}</b>{" "}
                      <span>${w.balance}</span>
                    </div>
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
                    <div className="flex flex-col">
                      <span>{c.name}</span> <b>{c.email}</b>
                    </div>
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
                    const selectedWallet = wallets?.find(
                      (w) => w.walletId === getFieldValue("walletId")
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
                addonBefore="$"
                type="number"
                placeholder="Input amount to be sent"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Send;
