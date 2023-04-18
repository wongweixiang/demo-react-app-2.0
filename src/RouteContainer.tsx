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
  { path: "/demo-react-app", element: <Home /> },
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
