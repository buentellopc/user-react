import React from "react";
import Aside from "./Aside";
import styles from "./Layout.module.css";

const Layout = (props) => (
  <div className={styles.Layout}>
    <Aside />
    <main className={styles.main}>{props.children}</main>
  </div>
);

export default Layout;
