import React from "react";
import "../components/css/pages/Signup.css"; // ✅ Import Signin page

export default function Signup() {
  return(
    <div>
        <div className="signin">
            <h1>Welcome to 347</h1>
            <p> Sign up for post notifications, email letter and many more! </p> 
        </div>

        <div className="signup-page">
          <div className="signup-box">
            <h1>Signup</h1>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>

       
            

    </div>    
  );
}