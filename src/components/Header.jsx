import React from "react";
import "./css/Header.css";


export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-left">
          <a>Episodes</a>
          <a>Vlogs</a>
        </div>

        <div className="nav-center">347</div>

        <div className="nav-right">
          <a>Blogs</a>
          <a>About</a>
        </div>
      </nav>
    </header>
  );
}