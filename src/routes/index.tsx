import React from "react";

import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Route, Routes } from "react-router-dom";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>
  );
} 