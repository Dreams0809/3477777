import React from "react";
<<<<<<< HEAD
import RotatingVideo from './RotatingVideo'
// import "./css/Body/Latest.css"; // styles for latest episode section
import "./css/Body/Home.css";



export default function Home() {



  return (
      
      <div>
        {/* other content */}
        <RotatingVideo />
        {/* other content */}
      </div>
  )

}
=======
import "./css/Body/Home.css";
import YouTubeRotator from "./YouTubeRotator.jsx"
export default function Home() {


  return (
    <div className="body-container">
      <h1> Yeeerr Whats Good My Hearts <3 </h1>

      <YouTubeRotator />

    </div>
  );
}
>>>>>>> cc9a2832785a114e1e4761f13ff4bf7b19c078e8
