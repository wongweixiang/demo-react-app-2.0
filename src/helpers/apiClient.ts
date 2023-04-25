import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const apiClient = () => {
  const { REACT_APP_API_URL } = process.env;

  const axiosInstance = applyCaseMiddleware(
    axios.create({
      baseURL: REACT_APP_API_URL,
      responseType: "json",
    })
  );

  return axiosInstance;
};

export default apiClient;
