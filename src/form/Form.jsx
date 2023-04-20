import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import './Form.css'

/* eslint-disable jsx-a11y/anchor-is-valid */
function Form() {
  const [form,setForm] = useState({})
  const [cookies, setCookie] = useCookies([]);
  const navigate = useNavigate();

  const checkLogin = () => {
    console.log(form);
    fetch(`https://justjayapi.000webhostapp.com/login?username=${form.username}&password=${form.password}`).then((res)=>res.json()).then((response)=>{ 
      console.log(response.Data[0].username); 
      console.log(response.Data[0].id); 
      if (response.Code === 1) {
        // alert("success")
        setCookie('userid', response.Data[0].id);
        setCookie('username', response.Data[0].username);
        if (response.Data[0].role_id === 1) {
          navigate("/admin")
        } else {
          navigate("/")
        }
        
      } else {
        alert("invalid user")
        
      }
    })
  };
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
         <input className="username" type="text" onChange={(e)=>{ setForm({...form,[e.target.name]:e.target.value}) }} name="username" placeholder="Username" />
        <input className="password" type="password" onChange={(e)=>{ setForm({...form,[e.target.name]:e.target.value}) }} name="password" placeholder="Password" />
        <a href="#" onClick={checkLogin} className="submit anchor" align="center">
          Sign in
        </a>
        { JSON.stringify(form)}
        <p className="forgot" align="center">
          <a href="/#">Forgot Password? </a>
        </p>
        <p className="text-center"><Link to="/register">Click here to create new account</Link></p>
      </form>
    </div>
  );
}

export default Form;