import React from "react";
import { Outlet } from "react-router-dom";
import UserNav from "../user/UserNav/UserNav";

export default function MainUserPage() {
  return (
    <div className="container">
      <UserNav />
      <Outlet />
    </div>
  );
}
