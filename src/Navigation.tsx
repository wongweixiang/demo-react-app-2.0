import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import {
  HomeOutlined,
  InteractionOutlined,
  SendOutlined,
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
        <Link to={PATHS.USER_PROFILE}>User Profile</Link>
      </Space>
    ),
  },
];

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>QuickPay</Logo>
      <Menu
        style={{ width: "100%", height: "100%" }}
        theme="dark"
        mode="inline"
        items={items}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 250px;
`;

const Logo = styled.div`
  font-size: 23px;
  font-weight: 700;
  font-style: italic;
  height: 100px;
  box-sizing: border-box;
  padding: 35px;
  text-align: center;
  color: #1aa3ff;
  background-color: #001529;
  user-select: none;
`;

export default Navigation;
