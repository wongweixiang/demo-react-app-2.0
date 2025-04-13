const baseUrl = process.env.REACT_APP_API_URL;

const API = {
  get: async (endpoint: string) => {
    let response;

    try {
      response = await fetch(baseUrl + endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Network error");
    }
  },
  post: async (endpoint: string, body: object) => {
    let response;

    try {
      response = await fetch(baseUrl + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      });

      return await response.json();
    } catch (error) {
      console.error("Error posting data:", error);
      throw new Error("Network error");
    }
  },
};

export default API;
