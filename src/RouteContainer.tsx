import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import UserProfile from "./pages/UserProfile";

import { PATHS } from "./constants";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

const routesList: RouteType[] = [
  { path: PATHS.HOME, element: <Home /> },
  { path: PATHS.TRANSACTIONS, element: <Transactions /> },
  { path: PATHS.USER_PROFILE, element: <UserProfile /> },
];

const RouteContainer = () => {
  return (
    <div className="mx-4 mt-14 mb-2 sm:mx-8 sm:mt-1">
      <Routes>
        {routesList.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </div>
  );
};

export default RouteContainer;
