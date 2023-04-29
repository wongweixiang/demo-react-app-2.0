import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import {
  HomeOutlined,
  InteractionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Space } from "antd";
import { PATHS, SCREEN_SIZES } from "./constants";

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
    <Wrapper isDisplayed={isDisplayed}>
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

type WrapperProps = {
  isDisplayed: boolean;
};

const Wrapper = styled.div`
  display: block;
  position: fixed;
  left: ${(props: WrapperProps) => (props.isDisplayed ? "0px" : "-251px")};
  transition: left 0.5s ease-out;

  height: 100%;
  border-right: 1px solid white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  @media only screen and (min-width: ${SCREEN_SIZES.SMALL}) {
    display: block;
    position: static;
    height: auto;
    border-right: none;
    box-shadow: none;
  }

  min-width: 250px;
  z-index: 10;
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
