import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themovideodb.org/3",
});

export default instance;
