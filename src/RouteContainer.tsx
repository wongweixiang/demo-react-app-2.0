import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import UserProfile from "./pages/UserProfile";
import Send from "./pages/Send";

import { PATHS } from "./constants";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

const routesList: RouteType[] = [
  { path: PATHS.HOME, element: <Home /> },
  { path: PATHS.TRANSACTIONS, element: <Transactions /> },
  { path: PATHS.USER_PROFILE, element: <UserProfile /> },
  { path: PATHS.SEND, element: <Send /> },
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
