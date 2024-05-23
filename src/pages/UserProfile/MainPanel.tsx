import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import SvgMapper from "../../helpers/svgMapper";

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
    <div className="flex-grow grey-border p-5 min-w-[300px] box-border">
      <h5 className="m-0">Bank Accounts</h5>
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
      <div className="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 mt-4 h-auto w-full gap-4">
        {bankAccounts.map((a) => (
          <AccountCard key={a.id} account={a} />
        ))}
      </div>
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
          </Button>{" "}
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
        </Form>
      </Modal>
    </div>
  );
};

const AccountCard = ({ account }: { account: BankAccount }) => {
  const dispatch: AppDispatch = useDispatch();

  const { bankAbbrev, id, accountNo, verificationStatus } = account;
  return (
    <Card
      className="flex-grow"
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
      <div className="flex justify-between items-end content-end min-w-40 box-border">
        <div className="flex flex-col">
          <Text>Account Number</Text>
          <Text strong>{accountNo}</Text>
        </div>
        <StatusTag status={verificationStatus} />
      </div>
    </Card>
  );
};

const StatusTag = ({ status }: { status: string }) => {
  const colourMapping: Record<string, string> = {
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
