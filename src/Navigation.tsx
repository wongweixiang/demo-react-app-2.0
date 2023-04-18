import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Menu } from "antd";

const items = [
  { key: "i0", label: <Link to="/demo-react-app">Home</Link> },
  { key: "i1", label: <Link to="/transactions">Transactions</Link> },
  { key: "i2", label: <Link to="/user_profile">User Profile</Link> },
  { key: "i3", label: <Link to="/send">Send</Link> },
];

const Navigation = () => {
  return (
    <Wrapper>
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

export default Navigation;
