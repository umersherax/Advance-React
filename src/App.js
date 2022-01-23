import React from "react";
import {Login, Register} from "./components/signup";
import Dashboar from "./components/dashboard";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
