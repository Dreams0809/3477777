import React from "react";
import "./css/Body/List.css"; // styles for city list
import "./css/Body/Latest.css"; // styles for latest episode section
import "./css/Body/Body.css";
export default function Body() {
  const cities = [
    {
      name: "California",
      url: "https://www.youtube.com/watch?v=Z9hU5Ddtq5I&t=128s",
    },
    {
      name: "Arizona",
      url: "https://www.youtube.com/watch?v=yCFodazcMEs",
    },
    {
      name: "Miami",
      url: "https://www.youtube.com/watch?v=zYQzqDHjWKM&t=767s",
    },
  ];

  return (
    <div className="body-container">
      {/* Latest Episode Section */}
      <div className="latest-episode">
        <h1>Latest Episode</h1>
        <p>
          Welcome to our newest episode of the 347 Podcast — where culture meets
          conversation.
        </p>
        {/* Add more episode content as needed */}
      </div>

      {/* Cities Traveled Section */}
      <div className="cities-traveled">
        <h2>Cities Traveled</h2>
        <ul>
          {cities.map((city, index) => (
            <li key={index}>
              <a
                href={city.url}
                target="_blank"
                rel="noopener noreferrer"
                className="city-link"
              >
                {city.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}