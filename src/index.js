import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter as Router } from "react-router-dom";
import Parent from "./Parent";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Parent />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
