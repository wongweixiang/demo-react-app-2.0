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
  { path: "/demo-react-app/", element: <Home /> },
  { path: "/demo-react-app/transactions", element: <Transactions /> },
  { path: "/demo-react-app/user_profile", element: <UserProfile /> },
  { path: "/demo-react-app/send", element: <Send /> },
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
