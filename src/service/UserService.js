const getAllUsers = () => {
  return fetch("http://localhost:9095/users");
};

const UserService = {
  getAllUsers,
};

export default UserService;
