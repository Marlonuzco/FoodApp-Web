import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeScreen from "./screens/LoggedScreens/home/index";
import UnLoggedScreen from "./screens/UnloggedScreens/index";
import "./App.css";

function App({ auth }) {
  return <>{auth.isLogged ? <HomeScreen /> : <UnLoggedScreen />}</>;
}

export default connect((store) => ({
  auth: store.auth,
}))(App);
