import React from "react";
import Aside from "./Aside";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation/MainNavigation";

const Layout = (props) => (
  <div className={styles.Layout}>
    {/* <MainNavigation /> */}
    <Aside />
    <main className={styles.main}>{props.children}</main>
  </div>
);

export default Layout;
