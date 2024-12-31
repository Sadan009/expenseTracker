import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate()

  // useEffect(() => {
  //       const response = fetch("http://localhost:8000/user/signin", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (response.ok && data.username) {
  //           setUsername(data.username);
  //       } else {
  //         console.error("Failed to fetch user");
  //       }
  // }, []);
  



  return (
    <div >
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-end">
          <nav className="w-full flex items-center justify-between">
            {/* Website title */}
            <h1 className="text-2xl font-bold font-moderustic text-center flex-grow">
              <span className="text-blue-400">E</span>xpense{" "}
              <span className="text-blue-400">T</span>racker
            </h1>
            
            {/* { username ? (
              <div className="flex items-center">
                <span className="mr-2 text-lg">{userName}</span>
                <div className="w-8 h-8 flex rounded-full bg-blue-500 items-center justify-center text-white ">
                  {userName.charAt(0).toUpperCase() +
                    userName.charAt(1).toUpperCase()}
                </div>
              </div>
            ) : ( */}
            <button className="py-1 w-32 border rounded-2xl shadow-sm bg-sky-600 text-white"
            onClick={() => {
              console.log("hi there");
              navigate('/login')
            }}>
              Login
            </button>
            {/* )} */}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Layout;
