// dashboard/src/App.js
import React from "react";
import jwt_decode from "jwt-decode";
import Dashboard from "./components/Home"; // या जहां Dashboard actual है

function App() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "http://localhost:3000";
    return null;
  }

  try {
    const decoded = jwt_decode(token);
    const now = Date.now() / 1000;
    if (decoded.exp < now) {
      localStorage.removeItem("token");
      window.location.href = "http://localhost:3000";
      return null;
    }
  } catch (e) {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000";
    return null;
  }

  return <Dashboard />;
}

export default App;
