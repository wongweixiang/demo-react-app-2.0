import React from "react";
import styled from '@emotion/styled'
import Navigation from "./Navigation";
import RouteContainer from "./RouteContainer";

function App() {
  return (
    <AppDiv>
      <Navigation />
      <AppBody>
      <RouteContainer/>
      </AppBody>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  display: flex;
`

const AppBody = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`


export default App;
