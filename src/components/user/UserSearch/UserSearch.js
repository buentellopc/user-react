import { useRef, useState } from "react";
import UserService from "../../../service/UserService";
import UserItem from "../UserItem/UserItem";

const UserSearch = () => {
  const [userId, setUserId] = useState("");

  const inputChangeHandler = (event) => {
    setUserId(event.target.value);
  };

  const searchHandler = (event) => {
    UserService.getUser(userId)
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search by id"
          value={userId}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <button
          className="btn btn-outline-secondary"
          type="submit"
          onClick={searchHandler}
        >
          Search
        </button>
        {userId}
      </div>
      {/* <UserItem/> */}
    </div>
  );
};

export default UserSearch;
