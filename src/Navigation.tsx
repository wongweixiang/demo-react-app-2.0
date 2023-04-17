import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const items = [
  { key: "i1", label: <Link to='/transactions'>Transactions</Link>},
  { key: "i2", label: <Link to='/user_profile'>User Profile</Link> },
  { key: "i3", label: <Link to='/send'>Send</Link> },
];

const Navigation = () => {
  return <Menu mode="inline" items={items} />;
};

export default Navigation;
