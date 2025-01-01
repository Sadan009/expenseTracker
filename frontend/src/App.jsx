import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/layouts/layout";
import MainPage from "./components/MainPage";
import UserRegister from "./components/UserRegister";
import UserAuth from "./components/UserAuth";

function App() {
  return (
    <div>
      <Router>
        <Layout />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<UserRegister />} />
          <Route path="/login" element={<UserAuth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
