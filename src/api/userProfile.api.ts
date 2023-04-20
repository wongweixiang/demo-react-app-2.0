import apiClient from "../helpers/apiClient";

class UserProfileAPI {
  getUserProfile = () => apiClient().get("/user_profile");
}

export default new UserProfileAPI();
