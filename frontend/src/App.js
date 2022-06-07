import React from "react";
import DashBoard from "./Pages/DashBoard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path="/" element={<DashBoard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
