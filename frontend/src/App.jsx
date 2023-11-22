import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/admin" element={<Dashboard />}></Route>
            <Route path="/admin/login" element={<Login />}></Route>
            <Route path="/admin/register" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
