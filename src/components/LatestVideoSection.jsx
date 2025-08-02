import React, { useEffect, useState } from 'react';
import './css/LatestVideoSection.css';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // Replace with your API key
const CHANNEL_ID = 'UCly7IKQY4sH4WnTPVAJqj_A';   // Replace with your channel ID


export default function LatestVideoSection() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=1`
        );
        const data = await res.json();
        if (data.items.length > 0) {
          const latest = data.items[0];
          setVideo({
            title: latest.snippet.title,
            thumbnail: latest.snippet.thumbnails.high.url,
            videoId: latest.id.videoId,
          });
        }
      } catch (error) {
        console.error('Failed to fetch latest video:', error);
      }
    };

    fetchLatestVideo();
  }, []);

  if (!video) return <div>Loading latest video...</div>;

  return (
    <div className="video-section">
      <div className="video-info">
        <span>NEW</span>
        <h2>{video.title}</h2>
      </div>
      <div className="video-thumb">
        <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer">
          <img src={video.thumbnail} alt="Latest Video Thumbnail" />
          <div className="play-button"></div>
        </a>
      </div>
    </div>
  );
};
