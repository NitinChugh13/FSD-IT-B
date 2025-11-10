import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const navigate = useNavigate();
  function submit(e){
    e.preventDefault();
    // fake auth
    localStorage.setItem("user","demo");
    navigate("/user");
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={submit} style={{maxWidth:420}}>
        <input placeholder="Email" required style={{width:"100%",padding:10,marginBottom:10}} />
        <input placeholder="Password" type="password" required style={{width:"100%",padding:10,marginBottom:10}} />
        <button className="btn" style={{padding:"10px 16px"}}>Login</button>
      </form>
    </div>
  );
}
