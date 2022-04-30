import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {

const naviget = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const SignUpData = {
            fullName : data.get("name"),
            email : data.get("email"),
            phone : data.get("phone"),
            password : data.get("password"),
        }
        console.log(SignUpData)

        if(SignUpData){
            naviget("/SignIn")
        }
    }


  return (
    <>
      <div className="signup-cotainer">
        <div className="signup-main">
          <form onSubmit={handleSubmit}>
            <label>Full name</label>
            <br />
            <input name="name" autoComplete="off" placeholder="Full Name" />
            <br />
            <label>Email</label>
            <br />
            <input name="email" autoComplete="off" placeholder="email@email.com" />
            <br />
            <label>phone</label>
            <br />
            <input name="phone" type="number" autoComplete="off" placeholder="phone no." />
            <br />
            <label>Password</label>
            <br />
            <input name="password" placeholder="password" />
            <br />
            <button className="signup-Btn">SignUp</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
