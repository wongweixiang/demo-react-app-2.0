import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

async function main() {
  if (window.location.pathname === "/demo-react-app") {
    window.location.pathname = "/demo-react-app/";
  }

  const { worker } = require("./mocks/browser");
  await worker.start({
    serviceWorker: {
      url: "/demo-react-app/mockServiceWorker.js",
    },
  });

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

main();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
