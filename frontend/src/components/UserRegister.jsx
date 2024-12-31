import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserRegister() {
  let [inputErrors, setInputErrors] = useState({});
  const [user, setUser] = useState({});
  let [inputformData, setInputFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputFormData({ ...inputformData, [e.target.name]: e.target.value });
    //    console.log(inputformData);
  };

  //  const handleSubmit = async (e) => {
  //    e.preventDefault();
  //      const res = await isLogin(inputformData);
  //      if (
  //        inputformData.email === res.data.email &&
  //        inputformData.password === res.data.password
  //      ) {
  //        console.log("Login Successfull");
  //     //    navigation("/");
  //      } else {
  //        console.log("login failed");
  //      }
  //  };

  return (
    <div className="flex h-screen col-auto">
      <div className="md:w-1/2 flex flex-col items-center justify-center ">
        <form className="flex flex-col items-center border border-opacity-75 rounded-2xl py-4 px-4 h-4/6 shadow-lg border-gray-300">
          <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            name="username"
            autoComplete="false"
            className="mt-10 p-4 md:w-96 border rounded-lg shadow-sm outline-gray-300  border-gray-300"
          />

          <input
            onChange={handleChange}
            type="text"
            placeholder="email"
            name="email"
            autoComplete="false"
            className="mt-5 md:w-96 p-4 border rounded-lg shadow-sm outline-gray-300  border-gray-300"
          />

          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="false"
            className=" mt-5 md:w-96 mb-5 p-4 border rounded-lg shadow-sm outline-gray-300  border-gray-300"
          />
          <button className="py-1 w-32 mx-7 border rounded-2xl shadow-sm bg-sky-600 text-white">
            Register
          </button>
          <span className="text-sm text-center">
            Already Resgistered?{" "}
            <Link to="/login" className="text-sky-600">
              Signin
            </Link>
          </span>
        </form>
      </div>

      <div className="md:w-1/2 bg-blue-400">
        <p className="text-white font-semibold text-5xl mt-24 mx-16 leading-snug tracking-wide font-moderustic">
          Welcome To <br />
          Expense Tracker
          <br />
          Here you can <br /> Track your <br /> Everyday Expenses
        </p>
      </div>
    </div>
  );
}

export default UserRegister;
