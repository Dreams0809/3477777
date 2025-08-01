import React from 'react';
import './css/YouTubeGrid.css';

const API_KEY = 'AIzaSyC7LgT30FoVySYKggZ0LKpYaNjMBNlGsZk'; // Replace with your actual API key
const CHANNEL_ID = 'UCly7IKQY4sH4WnTPVAJqj_A'; // Replace with your channel ID
const MAX_RESULTS = 6;

export default function YouTubeRotatorVids(){

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await res.json();

        const videoItems = data.items.filter(item => item.id.kind === 'youtube#video');
        setVideos(videoItems);
      } catch (err) {
        console.error('Failed to fetch videos:', err);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="video-row">
      {videos.map((video) => (
        <a
          key={video.id.videoId}
          href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="video-box"
        >
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
        </a>
      ))}
    </div>
  );
};



  
}
