import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Layout() {
  const [userName, setUserName] = useState("Sadan Imam");
  const [isUser, setIsUser] = useState("");

  const navigation = useNavigate();
  const onLoginClick = () => {
    navigation("/");
  };

  return (
    <header className="flex items-center justify-between p-4 border-b-2 border-black">
      <div></div>
      <h1 className="text-2xl font-bold font-moderustic">
        <span className="text-blue-400">E</span>xpense{" "}
        <span className="text-blue-400">T</span>racker
      </h1>
      {isUser ? (
        <div className="flex items-center">
          <span className="mr-2 text-lg">{userName}</span>
          <div className="w-8 h-8 flex rounded-full bg-blue-500 items-center justify-center text-white ">
            {userName.charAt(0).toUpperCase() +
              userName.charAt(1).toUpperCase()}
          </div>
        </div>
      ) : (
        <button
          onClick={onLoginClick}
          className="py-1 w-32 mx-7 border rounded-2xl shadow-sm bg-sky-600 text-white"
        >
          Login
        </button>
      )}
    </header>
  );
}

export default Layout;
