import React from "react";
import styles from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const MainNavigation = () => (
  <header className={styles.header}>
    <div className={styles.logo}>User COE</div>
    <nav>
      <ul>
        <li>
          <Link to="/user">All users</Link>
        </li>
        <li>
          <Link to="/user/new-user">New user</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
