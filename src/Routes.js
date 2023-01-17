import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import NotFounPage from "./screens/NotFoundScreen/index";
import Login from "./screens/Login/index";
import LoginForm from "./screens/Login/LoginForm/index";
import LoginRegister from "./screens/Login/LoginRegister/index";
import LoggedScreens from "./screens/LoggedScreens/home/index";
import UnLoggedScreen from "./screens/UnloggedScreens/index";
import CategoriesScreen from "./screens/LoggedScreens/Categories/index";

function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<NotFounPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/LoginRegister" element={<LoginRegister />} />
        <Route path="/UnLoggedScreen" element={<UnLoggedScreen />} />
        <Route path="/LoogedScreens" element={<LoggedScreens />} />
        <Route path="/Categories" element={<CategoriesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPage;
