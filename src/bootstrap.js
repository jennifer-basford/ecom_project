import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import reducer from "./reducers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

import "./style/main.scss";

import history from "./history";

import Layout from "./components/layout";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import Account from "./components/account/account";
import Shop from "./components/shop/shop";

function main() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/account" exact component={Account} />
            <Route path="/shop" exact component={Shop} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
