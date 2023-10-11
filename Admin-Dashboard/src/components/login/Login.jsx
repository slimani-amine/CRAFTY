import React, { useState } from "react";
import "./login.css";
import { database } from "./firebasecofig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Tostify } from "../../page/Tostify/ToastyFy.jsx";
import { toast } from "react-toastify";
import axios from "axios";
function login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const roleVerification = (email) => {
    return axios
      .get(`http://localhost:4000/user/getuserByEmail/${email}`)
      .then((res) => {
        return res.data.Role === "admin"
          ? true
          : res.data.Role === "user"
          ? "other role"
          : false;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };
  const login = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setMsg("Password must be at least 6 characters long");
    } else {
      const verifRole = await roleVerification(email);
      if (verifRole === true) {
        signInWithEmailAndPassword(database, email, password)
          .then((result) => {
            const user = userCredential.user;
            const token = user.getIdToken();
            localStorage.setItem("token", JSON.stringify({ token, email }));
            toast.success(
              `Welcome back, ${email.substring(0, email.indexOf("@"))}!`
            );
            setTimeout(() => {
              setUser();
            }, 2000);
          })
          .catch(function (error) {
            toast.error("Login failed. Please check your credentials.");
          });
      } else if (verifRole === "other role") {
        toast.error("Only Admin can login !");
      } else {
        toast.error("email don't found !");
      }
    }
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
            setMsg("");
          }}
        />
        {msg && (
          <p className="password-validation-msg">
            {msg}
            <span> *</span>
          </p>
        )}
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
