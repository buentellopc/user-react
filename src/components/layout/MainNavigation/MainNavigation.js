import React from "react";
import PropTypes from "prop-types";
import styles from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const MainNavigation = () => (
  <header className={styles.header}>
    <div className={styles.logo}>User COE</div>
    <nav>
      <ul>
        <li>
          <Link to="/">All users</Link>
        </li>
        <li>
          <Link to="/new-user">New user</Link>
        </li>
      </ul>
    </nav>
  </header>
);

MainNavigation.propTypes = {};

MainNavigation.defaultProps = {};

export default MainNavigation;
