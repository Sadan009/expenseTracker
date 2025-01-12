import React, { useState, useEffect } from "react";
import { getUserDetails } from "../api/postApi";
import { PieChart } from "react-minimal-pie-chart";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { BiMoviePlay } from "react-icons/bi";

function MainPage() {
  const [users, setUsers] = useState([]);

  return (
    <div className=" min-h-screen p-8 flex flex-col md:flex-row gap-8">
      {/* Left Section */}
      <div className="md:w-1/3 space-y-4">
        {/* Balance Card */}
        <div className="bg-white rounded-2xl drop-shadow-lg p-6">
          {/* <div className="flex mb-4"> */}
          <span className="text-gray-600 font-moderustic ">
            Current Balance
          </span>
          {/* </div> */}
          <div className="text-3xl font-bold font-moderustic mt-3">$288.50</div>
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
          <div className="text-lg font-medium font-moderustic mb-6">
            Recent Expenses
          </div>
          <div className="space-y-4 font-moderustic">
            <div className="flex items-center justify-between animate-pulse bg-gray-200 p-2 rounded w-full">
              <div className="flex items-center gap-3">
                <PiAirplaneInFlightFill />
                <span>Travel</span>
              </div>
              <div>
                <span className=" text-sm italic text-gray-500 ">$150.4</span>
              </div>
            </div>
            <div className="flex items-center justify-between animate-pulse bg-gray-200 p-2 rounded w-full">
              <div className="flex items-center gap-3">
                <IoFastFoodOutline />
                <span>Food & Beverages</span>
              </div>
              <div>
                <span className=" text-sm italic text-gray-500 ">$150.4</span>
              </div>
            </div>
            <div className="flex items-center justify-between animate-pulse bg-gray-200 p-2 rounded w-full">
              <div className="flex items-center gap-3">
                <GiClothes />
                <span>Clothes</span>
              </div>
              <div>
                <span className=" text-sm italic text-gray-500 ">$150.4</span>
              </div>
            </div>
            <div className="flex items-center justify-between animate-pulse bg-gray-200 p-2 rounded w-full">
              <div className="flex items-center gap-3">
                <BiMoviePlay />
                <span>Entertainment</span>
              </div>
              <div>
                <span className=" text-sm italic text-gray-500 ">$150.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 space-y-4">
        {/* User Info Card */}
        <div className="flex justify-end items-center mb-4">
          {/* <span className="text-gray-600 font-moderustic">Current Balance</span> */}
          <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-semibold outline-none rounded-2xl p-2">
            <option selected>Choose an option</option>
            <option value="W">Weekly</option>
            <option value="M">Monthly</option>
            <option value="Y">Yearly</option>
          </select>
        </div>
        <div className="bg-white rounded-lg py-5 flex flex-col items-center">
          <div className="font-medium bg-gray-300 drop-shadow-2xl p-2 rounded-full">
            <PieChart
              data={[
                { title: "Entertainment", value: 10, color: "#E38627" },
                { title: "Clothes", value: 15, color: "#C13C37" },
                { title: "Food & Beverages", value: 20, color: "#6A2135" },
                { title: "Travel", value: 5, color: "#75F542" },
              ]}
            />
          </div>
        </div>

        {/* Charts/Graphs Area */}
        <div className="bg-white rounded-lg shadow p-6">
          {/* Placeholder for charts/graphs */}
          <div className="bg-gray-200 h-full rounded w-full mb-4">Hello</div>
          <div className="bg-gray-200 h-full rounded w-full mb-4">Hello</div>
          <div className="bg-gray-200 h-full rounded w-full">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
