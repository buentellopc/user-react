import { useRef, useState } from "react";
import UserService from "../../../service/UserService";
import UserItem from "../UserItem/UserItem";

const UserSearch = () => {
  const [userId, setUserId] = useState("");
  const [userFound, setUserFound] = useState({});
  const [isUser, SetIsUser] = useState(false);

  const inputChangeHandler = (event) => {
    setUserId(event.target.value);
  };

  const searchHandler = (event) => {
    UserService.getUser(userId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserFound(data);
        SetIsUser(true);
      });
  };

  console.log(userFound);

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by id"
          value={userId}
          onChange={inputChangeHandler}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>

      {isUser && <UserItem userDetails={userFound} />}
    </div>
  );
};

export default UserSearch;
