import React from "react";
import logo from "./logo.svg";
import Navigation from "./Navigation";
import RouteContainer from "./RouteContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      <RouteContainer/>
      </header>
    </div>
  );
}

export default App;
