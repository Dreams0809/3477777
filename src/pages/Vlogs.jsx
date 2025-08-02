import React, { useEffect, useState } from 'react';
import '../components/css/pages/Vlogs.css';
import '../components/css/pages/VlogGrid.css'


const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = 'PLTuK-Smxm50Ah9DUw-l9DVMAh8IAx1KCD'; // Replace with actual vlog playlist ID

export default function Vlogs() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVlogs = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
        );
        const data = await res.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching vlog videos:', error);
      }
    };

    fetchVlogs();
  }, []);

  return (
    <>
      <div className="vlogs-section">
        <div className="vlogs-content">
          <h1>Welcome to fRiENDS VLOGS</h1>
          <p>
            Vlogs and vibes — friends who are family. Come see a different side of 347 when we’re not in the booth.
            Get to know our community and step into our world. Meet the people we hold dear, and join us as we take
            adventures from state to state, country to country — bringing the 347 vibe to the world. Enjoy.
          </p>
        </div>
      </div>

      <div className="vlog-grid">
        {videos.map((video) => {
          const snippet = video.snippet;
          const videoId = snippet.resourceId?.videoId;
          if (!videoId) return null;

          return (
            <a
              key={videoId}
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="vlog-card"
            >
              <img
                src={snippet.thumbnails.high.url}
                alt={snippet.title}
                className="vlog-thumb"
              />
            </a>
          );
        })}
      </div>
    </>
  );
}