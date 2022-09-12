import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../layout/MainNavigation/MainNavigation";
import AllUsers from "./AllUsers/AllUsers";

export default function MainUserPage() {
  return (
    <div className="container">
      <MainNavigation />
      <Outlet />
    </div>
  );
}
