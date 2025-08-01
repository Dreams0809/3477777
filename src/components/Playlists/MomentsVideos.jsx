import React, { useEffect, useState } from 'react';
import '../css/YouTubeGrid.css'; // Adjust if needed

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = 'PLTuK-Smxm50CwPNfqyn9CWUhgOH7uberh'; // ← Replace this!

export default function MomentsVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPlaylistVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
        );
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        console.log('347 Moments playlist response:', data);
        setVideos(data.items);
      } catch (err) {
        console.error('Failed to fetch 347 Moments playlist videos:', err);
      }
    };

    fetchPlaylistVideos();
  }, []);

  return (
    <div className="youtube-grid-container">
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
  );
}