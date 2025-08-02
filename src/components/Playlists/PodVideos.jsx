import React, { useEffect, useState } from 'react';
import '../css/YouTubeGrid.css'; // Reuse carousel styles

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = 'PLTuK-Smxm50BubWRFzEDpDqtw--nFk6Ar'; // 347Pod playlist ID

export default function PodVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
        );
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setVideos(data.items);
      } catch (err) {
        console.error('Failed to fetch playlist videos:', err);
      }
    };

    fetchPlaylistVideos();
  }, []);

  return (
    <div className="youtube-section">
      <div className="youtube-header">
        <h2>LATEST PODCASTS</h2>
        <a
          href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          See All
        </a>
      </div>

      <div className="youtube-carousel">
        {videos.map((video) => {
          const snippet = video.snippet;
          const videoId = snippet.resourceId?.videoId;
          if (!videoId) return null;

          return (
            <div key={videoId} className="video-card">
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={snippet.thumbnails.medium.url}
                  alt={snippet.title}
                  className="thumbnail"
                />
                <p className="video-title">{snippet.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}