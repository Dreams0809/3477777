import React from "react";
import "./css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Logo / Brand */}
        <div className="footer-left">
          <div className="footer-logo">347 MEDIA</div>
        </div>

        {/* Right - Follow us + Icons */}
        <div className="footer-right">
          <span className="follow-text">FOLLOW US</span>
          <a
            href="https://open.spotify.com/show/0ldVQ6k6B0mwkBEZltGR59?si=jsDpr-5ETOqY7AWTP04e9g"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faSpotify} /> 
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/347podcast/id1625572254"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faApple} /> 
          </a>
          <a
            href="https://www.instagram.com/347pod"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} /> 
          </a>
          <a
            href="https://www.youtube.com/@347pod"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} /> 
          </a>
        </div>
      </div>
    </footer>
  );
}