import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";

export default function AdminLayout(){
  return (
    <div className="container" style={{display:"flex",gap:20,alignItems:"flex-start",paddingTop:20}}>
      <AdminNav />
      <div style={{flex:1,background:"#fff",padding:20,borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,0.05)"}}>
        <Outlet />
      </div>
    </div>
  );
}
