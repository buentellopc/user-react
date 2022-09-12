import React from "react";
import styles from "./UserNav.module.css";
import { Link } from "react-router-dom";

const UserNav = (props) => (
  <section className={styles.header}>
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
    {props.children}
  </section>
);

export default UserNav;
