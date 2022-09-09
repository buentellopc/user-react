import React from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../../service/UserService";
import UserForm from "../../user/UserForm/UserForm";
import styles from "./NewUser.module.css";

const NewUser = () => {
  let navigate = useNavigate();

  const addUserHandler = (userData) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(userData),
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    };

    UserService.createUser(requestOptions)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log("post request message: ", data);
        navigate("/", { replace: true });
      });
  };

  return (
    <div className={styles.NewUser}>
      <UserForm onAddUser={addUserHandler} />
    </div>
  );
};

export default NewUser;
