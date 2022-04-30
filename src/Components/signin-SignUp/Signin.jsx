import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Signin.css"

const Signin = () => {
  const naviget = useNavigate();
  const [value, setValue] = useState();

  const FormSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const SigninData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(SigninData);

    if(SigninData){
      naviget("/")
    }
  };

  return (
    <>
      <div className="form-container">
        <div className="main">
          <form onSubmit={FormSubmit}>
            <label>User Email</label>
            <br />
            <input name="email" autoComplete="off" placeholder="email" />
            <br />
            <label>Password</label>
            <br />
            <input name="password" placeholder="password" />
            <br />
            <button className="formBtn">SignIn</button>
            <button className="formBtn">
              <Link to="/SignUp">SignUp</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
