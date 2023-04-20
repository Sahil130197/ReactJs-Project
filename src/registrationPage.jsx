import React, { useState } from "react";
import { Link } from "react-router-dom";
import './form/Form.css'
import CustomHook from "./Hooks/CustomHooks";

/* eslint-disable jsx-a11y/anchor-is-valid */

function Registration() {
  const {inputHandleChange,inps,errors } = CustomHook({},{usernameError:"",passwordError:""})
  const checkLogin = () => {
    console.log("inp from Hook",inps);
  };
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign up
      </p>
      <form className="form1">
        <input className="form-control" onChange={inputHandleChange} onBlur={inputHandleChange} type="text" name="username" placeholder="Username" />
        {errors.usernameError}
        <input className="form-control" type="password" onChange={inputHandleChange} onBlur={inputHandleChange}  name="password" placeholder="Password" />
        {errors.passwordError}
        <a href="#" onClick={checkLogin} className="submit anchor" align="center">
          Sign in
        </a>
        {/* { JSON.stringify(form)} */}
        <p className="forgot" align="center">
          <a href="/#">Forgot Password? </a>
        </p>
        <p className="text-center"><Link to="/register">Click here to create new account</Link></p>
      </form>
    </div>
  );
}

export default Registration;