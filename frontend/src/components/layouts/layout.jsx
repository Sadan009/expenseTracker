import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Layout() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:8000/users/signin/${id}`, {
      method : "GET",
        headers : {
            "Authorization"  : "Bearer " + localStorage.getItem("token")
        }
    }).then((res) => {
      res.json().then((data) => {
        if (data.username) {
          setUserName()
        }
      })
    })

    if (response.data && response.data._id === id) {
      setUser(response.data);
    } else {
      console.log("Invalid user ID");
    }  
    });

  return (
    <header className="flex items-center justify-between p-4 border-b-2 border-black">
      <div></div>
      <h1 className="text-2xl font-bold font-moderustic">
        <span className="text-blue-400">E</span>xpense{" "}
        <span className="text-blue-400">T</span>racker
      </h1>
      {user ? (
        <div className="flex items-center">
          <span className="mr-2 text-lg">{userName}</span>
          <div className="w-8 h-8 flex rounded-full bg-blue-500 items-center justify-center text-white ">
            {userName.charAt(0).toUpperCase() +
              userName.charAt(1).toUpperCase()}
          </div>
        </div>
      ) : (
        <button className="py-1 w-32 mx-7 border rounded-2xl shadow-sm bg-sky-600 text-white">
          Login
        </button>
      )}
    </header>
  );
}

export default Layout;
