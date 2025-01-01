import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { addUser, getUserDetails } from "../api/postApi";
import axios from "axios";

function UserRegister() {
  const [errors, setErrors] = useState({});

  const [keyErrors, setKeyErrors] = useState(false);
  // set the key error to the UI : if it's true then gave more padding and margin to the input field and input box-container

  const [isTaken, setIsTaken] = useState(false);

  const [user, setUser] = useState({});
  let [inputformData, setInputFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // form Validation:
  const handleValidation = () => {
    const validationErrors = {};

    // check userName:
    if (inputformData.username.trim() === "") {
      validationErrors.username = "username is required";
    }
    // check email:
    if (inputformData.email.trim() === "") {
      validationErrors.email = "email is required";
    } else if (isTaken) {
      validationErrors.email = "email is already in use";
    } else if (!/\S+@\S+\.\S+/.test(inputformData.email)) {
      validationErrors.email = "Invalid email format";
    }
    // Check password:
    if (inputformData.password === "") {
      validationErrors.password = "password is required";
    } else if (inputformData.password.length < 6) {
      validationErrors.password = "password must min. 6 letters";
    }
    // check confirm password:

    if (
      inputformData.confirmPassword.trim() === "" ||
      inputformData.confirmPassword !== inputformData.password
    ) {
      validationErrors.confirmPassword = "Password doesn't matched";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) {
      setKeyErrors(true);
    }
  };

  // input change:
  const handleChange = (e) => {
    setInputFormData({ ...inputformData, [e.target.name]: e.target.value });
    //    console.log(inputformData);
  };

  // onClick submit:
  const handleRegister = async (e) => {
    e.preventDefault();
    const valid = handleValidation(e);
    // console.log("Form working");
    if (valid && !isTaken) {
      try {
        const res = await axios.post(
          `http://localhost:8000/users/signup`,
          inputformData
        );
      } catch (err) {
        console.log(err);
      }
    }
    console.log("Form not Working");
  };

  return (
    <div className="flex h-screen col-auto">
      <div className="md:w-1/2 flex flex-col items-center justify-center ">
        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center border border-opacity-75 rounded-2xl py-4 px-4 h-4/6 shadow-lg border-gray-300"
        >
          <input
            onChange={handleChange}
            ref={inputRef}
            type="text"
            placeholder="username"
            name="username"
            autoComplete="false"
            className="mt-9 p-4 md:w-96 border rounded-lg shadow-sm outline-gray-300  border-gray-300"
          />
          <span className="font-moderustic text-xs text-red-700">
            {errors.username}
          </span>

          <input
            onChange={handleChange}
            type="text"
            ref={inputRef}
            placeholder="email"
            name="email"
            autoComplete="false"
            className="mt-4 md:w-96 p-4 border rounded-lg shadow-sm outline-gray-300  border-gray-300"
          />
          <span className="font-moderustic text-xs text-red-700">
            {errors.email}
          </span>

          <input
            onChange={handleChange}
            ref={inputRef}
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="false"
            className=" mt-4 md:w-96 p-4 border rounded-lg shadow-sm outline-gray-300  border-gray-300"
          />
          <span className="font-moderustic text-xs text-red-700">
            {errors.password}
          </span>

          <input
            onChange={handleChange}
            ref={inputRef}
            type="password"
            placeholder="Re-type Password"
            name="confirmPassword"
            autoComplete="false"
            className="mt-4 md:w-96 mb-5 p-4 border rounded-lg shadow-sm outline-gray-300  border-gray-300"
          />
          <span className="font-moderustic text-xs text-red-700">
            {errors.confirmPassword}
          </span>

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
