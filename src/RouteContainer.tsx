import React from "react";
import { Routes, Route } from "react-router-dom";
import Transactions from "./Transactions";
import UserProfile from "./UserProfile";
import Send from "./Send";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

const routesList: RouteType[] = [
  { path: "/transactions", element: <Transactions /> },
  { path: "/user_profile", element: <UserProfile /> },
  { path: "/send", element: <Send /> },
];

const RouteContainer = () => {
  return (
    <Routes>
      {routesList.map((r) => (
        <Route path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};

export default RouteContainer;
