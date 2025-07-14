import React from "react";
import "../components/css/pages/Login.css"; // ✅ Import Signin page

export default function bLogin() {
  return(
    <div>
        <div>
            <h1>Welcome to Login</h1>
        </div>

        <div className="signup-page">
            <div className="signup-box">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>   
            </div>

        </div>
    </div>
  )
}