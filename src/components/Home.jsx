import React from "react";
import "./css/Body/Home.css";


export default function Home() {
  return (
  <div className="custom-video-wrapper">
    <video
      className="custom-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="../video/Home/myVideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  );
}