import { useEffect, useRef, useState } from 'react';
import './css/YouTubeGrid.css';

export default function YouTubeRotator() {
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [videoIds, setVideoIds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.REACT_APP_CHANNEL_ID;

  // Load YouTube API script
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    return () => {
      if (player) player.destroy();
    };
  }, []);

  // Fetch latest video IDs from channel
  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
        );
        const data = await res.json();
        const ids = data.items
          .filter((item) => item.id.kind === 'youtube#video')
          .map((item) => item.id.videoId);
        setVideoIds(ids);
      } catch (err) {
        console.error('Error fetching YouTube videos:', err);
      }
    }

    fetchVideos();
  }, [API_KEY, CHANNEL_ID]);

  // Setup YouTube Player once API and video IDs are ready
  useEffect(() => {
    if (videoIds.length === 0) return;

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(playerRef.current, {
        videoId: videoIds[0],
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              const nextIndex = (currentIndex + 1) % videoIds.length;
              setCurrentIndex(nextIndex);
              newPlayer.loadVideoById(videoIds[nextIndex]);
            }
          }
        },
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0
        }
      });

      setPlayer(newPlayer);
    };
  }, [videoIds]);

  // Load next video when currentIndex changes
  useEffect(() => {
    if (player && videoIds.length > 0) {
      player.loadVideoById(videoIds[currentIndex]);
    }
  }, [currentIndex]);

  return (
    <div className="video-page">
      <div className="video-wrapper">
        <div ref={playerRef} className="video-iframe" />
      </div>
    </div>
  );
}
