import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import UserProfile from "./pages/UserProfile";
import Send from "./pages/Send";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

const routesList: RouteType[] = [
  { path: "/quickpay/", element: <Home /> },
  { path: "/quickpay/transactions", element: <Transactions /> },
  { path: "/quickpay/user_profile", element: <UserProfile /> },
  { path: "/quickpay/send", element: <Send /> },
];

const RouteContainer = () => {
  return (
    <Routes>
      {routesList.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};

export default RouteContainer;
