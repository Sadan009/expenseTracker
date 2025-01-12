import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/users/",
});

// getUsers
export const getUsers = () => {
  return api.get("/getusers");
};

//get user detail:
export const getUserDetails = (id) => {
  return api.get(`/userdetail/${id}`);
};

// post method add user - Signup
export const addUser = () => {
  return api.post("/signup");
};

// get method for email avail:
export const emailTaken = (email) => {
  return api.get(`/istaken/${email}`);
};

// Registration and Login: -----------------------

// post method register:
export const signUp = (data) => {
  return api.post("/signup", data);
};

// // get method
export const isLogin = (data) => {
  return api.post("/signin", data);
};
