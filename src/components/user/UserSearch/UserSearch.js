import { useState } from "react";

const UserSearch = () => {
  const [foo, SetFoo] = useState("");
  const searchHandler = () => {
    SetFoo("handler and state is working");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Search by id"
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
        {foo}
      </div>
    </div>
  );
};

export default UserSearch;
