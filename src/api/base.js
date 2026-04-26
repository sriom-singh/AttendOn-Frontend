import axios from "axios";

// const token = localStorage.getItem("")

export const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // important for cookies/JWT
//   headers:{
//     "Authorization":`Bearer ${token}`
//   }
});