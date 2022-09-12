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
import styles from "./Aside.module.css";
import { Link } from "react-router-dom";

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
      style={{
        backgroundColor: "#353535",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <SidebarHeader style={headerStyle}>Sidebar Header</SidebarHeader>
      <SidebarContent>
        <Menu className={styles.MenuSidebar}>
          <MenuItem>Account</MenuItem>
          <MenuItem>Catalog</MenuItem>
          <MenuItem>Corporate</MenuItem>
          <MenuItem>Reward Point</MenuItem>
          <MenuItem>Account Reward Balance</MenuItem>
          <MenuItem>Order</MenuItem>
          <MenuItem>Payment Order</MenuItem>
          <MenuItem>
            <Link to="/user">User</Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to="/userInfo">User Info</Link>
          </MenuItem>
          <MenuItem>Address</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
}
