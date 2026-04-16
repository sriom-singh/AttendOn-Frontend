// api/authApi.js
import axios from "axios";

const token = localStorage.getItem("")

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // important for cookies/JWT
  headers:{
    "Authorization":`Bearer ${token}`
  }
});

export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);
export const getMe = () => API.get("/users/me");
export const logoutUser = () => API.post("/auth/logout");