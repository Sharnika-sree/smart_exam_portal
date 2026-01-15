
import "../App.css";
import examImage from "../assets/exam-illustration.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked");


    if (!email || !password || !role) {
      setError("All fields are required");
      return;
    }

    setError("");
    console.log(email, password,role);
    if (role === "admin") navigate("/admin");
    if (role === "student") navigate("/student");
    if (role === "examiner") navigate("/examiner");
  };
  return (
    <div className="login-container">
      <div className="left-side">
        
        <h1>WELCOME TO EXAM PORTAL</h1>
        <p>this is safe and secure</p>
      </div>

      <div className="right-side">
        <div className="login-box">
        <h2>Login  Today</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email ID </label>
            <input type="email" placeholder="Enter email id"  value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)}></input>   
            <label>role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="examiner">Examiner</option>
  
            </select>
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p className="help-text">having trouble logging in? contact the administrator.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
