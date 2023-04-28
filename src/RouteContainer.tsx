import React from "react";
import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import UserProfile from "./pages/UserProfile";

import { PATHS, SCREEN_SIZES } from "./constants";

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
    <Container>
      <Routes>
        {routesList.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  margin: 55px 50px 10px;

  @media only screen and (min-width: ${SCREEN_SIZES.SMALL}) {
    margin: 0px 50px 10px;
  }
`;

export default RouteContainer;
