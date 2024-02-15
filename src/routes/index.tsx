import React from "react";

import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Route, Routes } from "react-router-dom";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
} 