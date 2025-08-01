import React from "react";
import '../components/css/SubscribeDropdown.css';
import '../components/css/pages/Pods.css';
import VerticalPods from "../components/Pages/VerticalPods";

export default function Pods() {
  return (
    <div>
      <div className="intro-section">
        <img src="/your-image.jpg" alt="347 Podcast" className="intro-image" />
        <div className="intro-text">
          <h1>347 Podcast</h1>
          <p>
            The 347podcast is a short-form conversation with friends and guests that range from entertainers,
            organizers, and beyond. Come vibe with us.
          </p>
          <div className="subscribe-dropdown">
            <button className="subscribe-btn">Subscribe</button>
            <div className="dropdown-content">
              <a href="https://www.youtube.com/@347pod" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://podcasts.apple.com/" target="_blank" rel="noopener noreferrer">Apple Podcasts</a>
              <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify</a>
            </div>
          </div>
        </div>
      </div>

      <div className="episode-list">
        <h1>ALL PODCAST EPISODES</h1>
        <VerticalPods /> {/* ✅ This should only list the episodes */}
      </div>
    </div>
  );
}