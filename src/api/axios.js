import axios from "axios";

const jwtToken = localStorage.getItem("token");

export default axios.create(
  {
    baseURL: "http://localhost:5000",
  },
  {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `${jwtToken}`,
    },
  }
);
