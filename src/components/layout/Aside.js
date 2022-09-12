import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { BsDash } from "react-icons/bs";

export default function Aside() {
  const headerStyle = {
    padding: "35px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "1px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "noWrap",
  };

  return (
    <ProSidebar
      style={{ backgroundColor: "#353535", height: "100vh", color: "white" }}
    >
      <SidebarHeader style={headerStyle}>Sidebar Header</SidebarHeader>
      <SidebarContent>
        <Menu>
          <MenuItem>Users</MenuItem>
          <MenuItem>User Info</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
}
