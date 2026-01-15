import React from "react";
import "../App.css";
import examImage from "../assets/exam-illustration.png";


const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-side">
        
        <h1>WELCOME TO EXAM PORTAL</h1>
        <p>this is safe and secure</p>
      </div>

      <div className="right-side">
        <div className="login-box">
        <h2>Login  Today</h2>
        <form>
          <div className="form-group">
            <label>Email ID </label>
            <input type="email" placeholder="Enter email id" />
                          <label>Password</label>
            <input type="password" placeholder="enter password"></input>   
                   </div>
                   <button type="submit">Login</button>
                   </form>
                   <p className="help-text">having trouble logging in? contact the administrator.</p>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
