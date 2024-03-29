import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducers";

import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { Auth0Provider } from "@auth0/auth0-react";

const store = createStore(reducer, applyMiddleware(thunk));

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
