import { useEffect, useRef, useState } from 'react';
import './css/YouTubeGrid.css'; // Link to external CSS file

const YouTubeRotator = () => {
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);

  // Replace these with your actual video IDs
  const videoIds = [
    'RzgbAwk2nwY',
    'wcP7JLL8GGc',
    'lJHRTVuuemM'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(playerRef.current, {
        videoId: videoIds[currentIndex],
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

    return () => {
      if (player) player.destroy();
    };
  }, []);

  useEffect(() => {
    if (player && player.loadVideoById) {
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
};

export default YouTubeRotator;
