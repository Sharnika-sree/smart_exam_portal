import React from "react";
import examImage from "../assets/exam-illustration.png";
import "../App.css";

const Admin = () => {
  return (
    <div className="page-container">
      <div
        className="left-panel"
        style={{ backgroundImage: `url(${examImage})` }}
      ></div>
      <div className="right-panel">
        <div className="page-box">
          <h1>Admin Dashboard</h1>
          <p>Welcome, Admin! You can create users and assign exams here.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
