import React, { useEffect, useState } from "react";
import "../../components/css/pages/VerticalPods.css";

export default function VerticalPods() {
  const [videos, setVideos] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
        const PLAYLIST_ID = "PLTuK-Smxm50BubWRFzEDpDqtw--nFk6Ar"; // 🔁 Replace with your actual playlist ID

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
        );
        const data = await response.json();

        setVideos(data.items || []);
      } catch (err) {
        console.error("Error fetching podcast videos:", err);
      }
    };

    fetchVideos();
  }, []);

  const displayedVideos = showAll ? videos : videos.slice(0, 6);

  return (
    <div className="vertical-pod-list">
      {displayedVideos.map((video) => (
        <div key={video.id} className="episode-card">
          <a
            href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="episode-thumbnail"
            />
          </a>
          <div className="episode-info">
            <h3>{video.snippet.title}</h3>
          </div>
        </div>
      ))}

      {!showAll && videos.length > 6 && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={() => setShowAll(true)}>
            More Episodes
          </button>
        </div>
      )}
    </div>
  );
}