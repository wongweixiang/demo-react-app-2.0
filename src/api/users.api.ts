import apiClient from "../helpers/apiClient";

class UsersAPI {
  getUsers = () => apiClient().get("users");
}

export default new UsersAPI();
