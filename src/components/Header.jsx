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

        <div className="nav-center">347</div>

        <div className="nav-right">
          <Link to="/blogs">BLOGS</Link>
        </div>
      </nav>
    </header>
  );
}