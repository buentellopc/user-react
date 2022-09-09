import React from "react";
import styles from "./UserItem.module.css";

const UserItem = (props) => (
  <li>
    <div className={styles.content}>
      <h3>{props.name}</h3>
    </div>
  </li>
);

export default UserItem;
