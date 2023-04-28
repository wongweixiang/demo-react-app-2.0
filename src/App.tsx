import React, { useState } from "react";
import styled from "@emotion/styled";
import { MenuOutlined } from "@ant-design/icons";
import Navigation from "./Navigation";
import RouteContainer from "./RouteContainer";
import { SCREEN_SIZES } from "./constants";

function App() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  // should listen for clicks outside div

  const ref = useOutsideClick(() => setIsNavOpen(false));

  return (
    <AppDiv>
      <NavRef ref={ref}>
        <Navigation isDisplayed={isNavOpen} />
      </NavRef>
      <AppBody>
        <AppHead>
          <MenuOutlined
            onClick={(e) => setIsNavOpen((prev) => !prev)}
            style={{ fontSize: "24px", color: "white" }}
          />
        </AppHead>
        <RouteContainer />
      </AppBody>
    </AppDiv>
  );
}

const useOutsideClick = (callback: () => void) => {
  const ref = React.useRef() as any;

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

const AppDiv = styled.div`
  display: flex;
`;

const AppBody = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-size: calc(10px + 2vmin);
`;

const NavRef = styled.div`
  background-color: #001529;
`;

const AppHead = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  z-index: 5;

  background: #001529;
  width: 100%;
  height: 55px;

  @media only screen and (min-width: ${SCREEN_SIZES.SMALL}) {
    display: none;
  }
`;

export default App;
