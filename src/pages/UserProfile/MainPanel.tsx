import { Card, Button, Tag, Modal, Form, Tooltip, Input, Select } from "antd";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

import { BankAccount } from "./types";
import SvgMapper from "../../helpers/svgMapper";
import { useBanks } from "../../hooks/useBanks";
import { useModalState } from "../../hooks/useModalState";
import { FC } from "react";

const MAX_NUMBER = 5;

type MainPanelProps = { bankAccounts: BankAccount[] };

const MainPanel: FC<MainPanelProps> = ({ bankAccounts }) => {
  const { banks, form, handleAddBankAccount, handleDeleteBankAccount } =
    useBanks();

  const { isModalOpen, handleModalOpening, handleModalClosing } =
    useModalState();

  return (
    <div className="flex-grow grey-border p-5 min-w-[300px] box-border">
      <h5 className="m-0">Bank Accounts</h5>
      <Tooltip
        title={`You may add a maximum of ${MAX_NUMBER} accounts`}
        placement="bottomLeft"
      >
        <Button
          className="flex items-center bg-gray-100 mt-2"
          disabled={bankAccounts.length >= MAX_NUMBER}
          onClick={handleModalOpening}
        >
          <PlusCircleOutlined />
          <span>Add Account</span>
        </Button>
      </Tooltip>
      <div className="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 mt-4 h-auto w-full gap-4">
        {bankAccounts.map((a) => (
          <AccountCard
            key={a.id}
            account={a}
            handleDeleteBankAccount={handleDeleteBankAccount}
          />
        ))}
      </div>
      <Modal
        title="Add a bank account"
        open={isModalOpen}
        footer={[]}
        closable={false}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => handleAddBankAccount(values)}
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
                  <div className="flex justify-between">
                    <SvgMapper bankAbbrev={b.value} width="60px" />
                    <span>{b.label}</span>
                  </div>
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
          </Button>
          <Button className="ml-3" onClick={handleModalClosing}>
            Cancel
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

const AccountCard = ({
  account,
  handleDeleteBankAccount,
}: {
  account: BankAccount;
  handleDeleteBankAccount: (id: number) => void;
}) => {
  const { bankAbbrev, id, accountNo, verificationStatus } = account;
  return (
    <Card
      className="flex-grow theme card-head-grey"
      title={<SvgMapper bankAbbrev={bankAbbrev} />}
      extra={
        <Button
          className="flex items-center"
          onClick={() =>
            Modal.confirm({
              title: "Confirm deletion",
              content: "Are you sure you wish to delete this bank account?",
              onOk: () => handleDeleteBankAccount(id),
            })
          }
        >
          <DeleteOutlined />
        </Button>
      }
    >
      <div className="flex justify-between items-end content-end min-w-40 box-border">
        <div className="flex flex-col">
          <span>Account Number</span>
          <span className="font-medium">{accountNo}</span>
        </div>
        <StatusTag status={verificationStatus} />
      </div>
    </Card>
  );
};

const StatusTag = ({ status }: { status: string }) => {
  const colourMapping: Record<string, string> = {
    pending: "grey",
    verified: "green",
    rejected: "red",
  };

  return (
    <Tag color={colourMapping[status]} className="capitalize">
      {status}
    </Tag>
  );
};

export default MainPanel;
