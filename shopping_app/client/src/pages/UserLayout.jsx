import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";

export default function UserLayout(){
  return (
    <div>
      <UserNavbar />
      <div className="container" style={{paddingTop:20}}>
        <Outlet />
      </div>
    </div>
  );
}
