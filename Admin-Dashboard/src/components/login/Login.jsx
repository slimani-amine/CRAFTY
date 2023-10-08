import React, { useState } from "react";
import "./login.css";
import { database } from "./firebasecofig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Tostify } from "../../page/Tostify/ToastyFy";
import { toast } from "react-toastify";
function login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(database, email, password)
      .then((result) => {
        let token = result._tokenResponse.idToken;
        localStorage.setItem("token", token);
        toast.success("welcomeBack " + email.substring(0, email.indexOf("@")));
        setTimeout(() => {
          setUser();
        }, 3000);
      })
      .catch(function (error) {
        toast.error("login failed");
      });
  };
  return (
    <div className="container">
      <form className="form" action="">
        <p className="title">Login Form</p>
        <input
          placeholder="email"
          className="email input"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Tostify />
        <input
          placeholder="Password"
          className="password input"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="btn"
          type="submit"
          onClick={(e) => {
            login(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default login;
