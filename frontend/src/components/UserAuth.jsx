import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function UserAuth() {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});
  let [inputformData, setInputFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
        <form className="flex flex-col items-center border border-opacity-75 rounded-2xl py-5 px-4 h-3/6 shadow-lg border-gray-300">
          <input
            onChange={handleChange}
            ref={inputRef}
            type="email"
            placeholder="email"
            name="email"
            autoComplete="false"
            className="mt-9 md:w-96 p-4 border rounded-lg shadow-sm outline-gray-300  border-gray-300"
          />

          <input
            onChange={handleChange}
            ref={inputRef}
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="false"
            className=" mt-5 md:w-96 mb-5 p-4 border rounded-lg shadow-sm outline-gray-300  border-gray-300"
          />
          <button className="py-1 w-32 mx-7 border rounded-2xl shadow-sm bg-sky-600 text-white">
            Login
          </button>
          <span className="text-sm text-center">
            Not Registered Yet?{" "}
            <Link to="/signup" className="text-sky-600">
              Signup
            </Link>
          </span>
        </form>
      </div>

      <div className="md:w-1/2 bg-blue-400">
        <p className="text-white font-semibold text-5xl mt-24 mx-16 leading-snug tracking-wide font-moderustic">
          Track your
          <br />
          Everyday <br />
          Expenses
        </p>
      </div>
    </div>
  );
}

export default UserAuth;
