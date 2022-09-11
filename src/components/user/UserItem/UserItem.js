import React from "react";
import styles from "./UserItem.module.css";

const UserItem = (props) => (
  <tr>
    <td>
      <p>{props.id}</p>
    </td>
    <td>
      <p>{props.name}</p>
    </td>
    <td>
      <p>{props.lastName}</p>
    </td>
    <td>
      <p>{props.gender}</p>
    </td>
    <td>
      <p>{props.citizenNumber}</p>
    </td>
    <td>
      <p>{props.addressID}</p>
    </td>
  </tr>
);

export default UserItem;
