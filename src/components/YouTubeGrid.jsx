import React, { useEffect, useState } from 'react';
import './css/YouTubeGrid.css';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCly7IKQY4sH4WnTPVAJqj_A';

export default function YouTubeGrid() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
        );
        const data = await res.json();
        const videoItems = data.items.filter(item => item.id.kind === 'youtube#video');
        setVideos(videoItems);
      } catch (err) {
        console.error('Failed to fetch YouTube videos:', err);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="youtube-section">
      <div className="youtube-header">
        <h2>LATEST VIDEOS</h2>
        <a href={`https://www.youtube.com/channel/${CHANNEL_ID}`} target="_blank" rel="noopener noreferrer">
          See All
        </a>
      </div>

      <div className="youtube-carousel">
        {videos.map(video => (
          <div key={video.id.videoId} className="video-card">
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="thumbnail"
              />
              <p className="video-title">{video.snippet.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}