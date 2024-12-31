import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../api/postApi";

function MainPage() {
  const [users, setUsers] = useState([]);
//   console.log(users);
//   const { id } = useParams();

//   const fetchUserDetails = async (id) => {
//     try {
//       const res = await getUserDetails(id);
//       console.log(res.data);
//       setUsers(res.data);
//     } catch (error) {
//       console.error("Error fetching user:", error);
//       // Handle error (e.g., display an error message)
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails(id);
//   }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8 flex flex-col md:flex-row gap-8">
      {/* Left Section */}
      <div className="md:w-1/3 space-y-4">
        {/* Balance Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Current Balance</span>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <div className="text-3xl font-bold">$288.50</div>
          <div className="mt-4 flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
              Check your wallet
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm">
              Add to your account
            </button>
          </div>
        </div>

        {/* Transactions Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-lg font-medium mb-4">Transactions</div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3">
                {/* Transaction Item */}
                <div className="animate-pulse bg-gray-200 h-6 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 space-y-4">
        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="rounded-full w-24 h-24 bg-gray-200 mb-4">
            {/* User Avatar (Placeholder) */}
          </div>
          <div className="text-xl font-medium">Gareeb</div>
        </div>

        {/* Charts/Graphs Area */}
        <div className="bg-white rounded-lg shadow p-6 h-64">
          {/* Placeholder for charts/graphs */}
          <div className="animate-pulse bg-gray-200 h-full rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
