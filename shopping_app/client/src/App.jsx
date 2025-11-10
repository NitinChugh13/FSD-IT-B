import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* user area */
import UserLayout from "./pages/UserLayout";
import UserDashboard from "./pages/UserDashboard";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

/* admin area */
import AdminLayout from "./pages/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOverview from "./pages/AdminOverview";
import AdminUsers from "./pages/AdminUsers";
import AdminReports from "./pages/AdminReports";
import AdminSettings from "./pages/AdminSettings";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          {/* public */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* user nested layout */}
          <Route path="/user/*" element={<UserLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
          </Route>

          {/* admin nested layout */}
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="overview" element={<AdminOverview />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* fallback */}
          <Route path="*" element={<h1 style={{textAlign:"center", marginTop:50}}>404 - Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
