import React from "react";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation/MainNavigation";
import SideMenu from "./SideMenu";

const Layout = (props) => (
  <div>
    <MainNavigation />
    <SideMenu />
    <main className={styles.main}>{props.children}</main>
  </div>
);

export default Layout;
