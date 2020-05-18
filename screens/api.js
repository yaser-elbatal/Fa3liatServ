import axios from "axios";

export default axios.create({
  baseURL: "https://shams.arabsdesign.com/fallah/api/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});
