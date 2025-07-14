import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom"; // ✅ Use Link from react-router-dom

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/vids">VIDS</Link>
          <Link to="/vlogs">VLOGS</Link>
          
        </div>
 
        <div className="nav-center">
          <Link to="/">347</Link>
        </div> 

        <div className="nav-right">
          <Link to="/blogs">BLOGS</Link>
          <Link to="/signup">SIGN UP</Link>
          <Link to="/login">LOGIN</Link>
        </div>
      </nav>
    </header>
  );
}