import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/layouts/layout";

function App() {
  return (
    <div>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
