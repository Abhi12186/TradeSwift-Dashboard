import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import "./TopBar.css";

const TopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("US");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const name = payload.name || "User";
        const initials = name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase();
        setUsername(initials);
      } catch (e) {
        console.error("Token parsing failed");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000"; // Redirect to frontend login
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />

      {/* User Icon Section */}
      <div className="user-menu">
        <div className="user-icon" onClick={() => setShowDropdown(!showDropdown)}>
          {username}
        </div>

        {showDropdown && (
          <div className="dropdown">
            <p>Profile</p>
            <p>Settings</p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
