import { Link } from "react-router-dom";
import {
  HomeOutlined,
  InteractionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Space } from "antd";
import { PATHS } from "./constants";

const items = [
  {
    key: "i0",
    label: (
      <Space>
        <HomeOutlined />
        <Link to={PATHS.HOME}>Home</Link>
      </Space>
    ),
  },
  {
    key: "i2",
    label: (
      <Space>
        <InteractionOutlined />
        <Link to={PATHS.TRANSACTIONS}>Transactions</Link>
      </Space>
    ),
  },
  {
    key: "i3",
    label: (
      <Space>
        <UserOutlined />
        <Link to={PATHS.USER_PROFILE}>Profile</Link>
      </Space>
    ),
  },
];

const Navigation = ({ isDisplayed }: { isDisplayed: boolean }) => {
  return (
    <div
      className={`block fixed h-full min-w-64 bg-gray-900 navbar-desktop ${
        isDisplayed ? "left-0" : "-left-64"
      } z-20`}
    >
      <div className="h-24 font-bold text-2xl text-sky-400 text-center italic box-border select-none p-8">
        QuickPay
      </div>
      <Menu
        className="w-full h-full"
        theme="dark"
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Navigation;
