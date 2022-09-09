import React from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation/MainNavigation";

const Layout = (props) => (
  <div>
    <MainNavigation />
    <main className={styles.main}>{props.children}</main>
  </div>
);

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
