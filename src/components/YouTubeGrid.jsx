import React, { useEffect, useState } from 'react';
import './css/YouTubeGrid.css';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // hide this in .env
const CHANNEL_ID = 'UCly7IKQY4sH4WnTPVAJqj_A'; // Replace this with your channel ID



export default function YouTubeGrid() {
  
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('API_KEY:', API_KEY);
    console.log('CHANNEL_ID:', CHANNEL_ID);
    const fetchVideos = async () => {
      try {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
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
    <div className="youtube-grid-container">
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
  );
  
}