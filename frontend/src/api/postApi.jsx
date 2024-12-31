import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/users/",
});

// getUsers
export const getUsers = () => {
  return api.get("/getusers");
};

// // get method
// export const signIn = (id) => {
//   return api.get(`/signin/${id}`);
// };

//get user detail:
export const getUserDetails = (id) => {
  return api.get(`/userdetail/${id}`);
};