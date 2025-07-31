import React from "react";
import '.components/css/SubscribeDropdown.css';

export default function Pods() {
  return(
    <div>
      <div className="intro-section">
        <img
          src="/your-image.jpg"
          alt="347 Podcast"
          className="intro-image"
          />
        <div className="intro-text">
          <h1>347 Podcast</h1>
            <p>
              The 347podcast is a short-form conversation with friends and guests that range from entertainers, organizers, and beyond.
              We like meeting new people, so no conversation is safe, and all guests are welcome. Come vibe with us.
            </p>
        </div>
      </div>
        
        <div className="subscribe-dropdown">
          <button className="subscribe-btn">Subscribe</button>
        <div className="dropdown-content">
          <div>
            <a href="https://www.youtube.com/@347pod" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://podcasts.apple.com/" target="_blank" rel="noopener noreferrer">Apple Podcasts</a>
            <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify</a>
          </div>
        </div>
      </div>
    </div>  
};
