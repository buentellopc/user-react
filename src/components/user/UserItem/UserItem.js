import React from "react";
import styles from "./UserItem.module.css";

const UserItem = (props) => (
  <tr>
    <td>
      <h3>{props.id}</h3>
    </td>
    <td>
      <h3>{props.name}</h3>
    </td>
    <td>
      <h3>{props.lastName}</h3>
    </td>
  </tr>
);

export default UserItem;
