import React from "react";
import styles from "./SideMenu.module.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div>
      <div className={styles.sidenav}>
        <Link to="/user">All users</Link>
        <Link to="/user">All users</Link>
        <Link to="/user">All users</Link>
        <Link to="/user">All users</Link>
        <Link to="/user">All users</Link>
        <Link to="/user">All users</Link>
      </div>
    </div>
  );
};

export default SideMenu;
