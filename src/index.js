import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>
);
