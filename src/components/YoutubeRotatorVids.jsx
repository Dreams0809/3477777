import React from 'react';
import './css/YouTubeRotatorVids.css';

// Replace these with actual 347 Podcast video IDs
const videoIds = [
  'dQw4w9WgXcQ',
  '3JZ_D3ELwOQ',
  'M7lc1UVf-VE',
  'sNPnbI1arSE',
  'ktvTqknDobU',
  'tVj0ZTS4WF4'
];

const YouTubeGrid = () => {
  return (
    <div className="grid-container">
      {videoIds.map((id) => (
        <a
          key={id}
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="video-box"
        >
          <img
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            alt="YouTube Thumbnail"
          />
        </a>
      ))}
    </div>
  );
};

export default YouTubeGrid;
