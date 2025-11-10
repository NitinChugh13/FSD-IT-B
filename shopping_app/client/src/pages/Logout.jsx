import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout(){
  const nav = useNavigate();
  useEffect(()=>{
    localStorage.removeItem("user");
    // optional: show a message then redirect
    nav("/login");
  },[nav]);
  return null;
}
