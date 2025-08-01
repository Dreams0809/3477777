import React, { useEffect, useState } from 'react'

const videoIds = [
  'RzgbAwk2nwY',
  'lJHRTVuuemM',
  '08B0YAqIf0k',
  // Add more video IDs from your channel
]


export default function RotatingVideo() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoIds.length)
    }, 15000) // 15-second rotation
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="video-page-wrapper">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoIds[currentIndex]}?autoplay=1&mute=1`}
          title="347 Podcast Video"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
