const createUser = (requestOptions) =>
  fetch("http://localhost:9092/v1/publish/user", requestOptions);

const getAllUsers = () => {
  return fetch("http://localhost:9095/users");
};

const getUser = (userId) => {
  return fetch(`http://localhost:9095/user/${userId}`);
};

const UserService = {
  createUser,
  getAllUsers,
  getUser,
};

export default UserService;
