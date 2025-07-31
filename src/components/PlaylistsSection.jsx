import React, { useEffect, useState } from 'react';
import './YouTubeGrid.css';

const KEYWORDS = [
  { key: '347 Moments', title: '347 Moments' },
  { key: 'Behind The Scenes', title: 'Behind The Scenes' },
  { key: '347 Pod', title: '347 Pod' },
  { key: 'Vlogs', title: ' 347 Vlogs' }

  
  export default function PlaylistSection (){

  const [playlistMap, setPlaylistMap] = useState({});
  const [videosMap, setVideosMap] = useState({});
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.REACT_APP_CHANNEL_ID;

  useEffect(() => {
    async function fetchPlaylists() {
      const resp = await fetch(
        `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&key=${API_KEY}`
      );
      const data = await resp.json();
      const map = {};
      data.items.forEach(pl => {
        const title = pl.snippet.title.toLowerCase();
        KEYWORDS.forEach(({ key }) => {
          if (title.includes(key)) {
            map[key] = pl.id;
          }
        });
      });
      setPlaylistMap(map);
    }
    fetchPlaylists();
  }, [API_KEY, CHANNEL_ID]);

  useEffect(() => {
    async function fetchVideosFor(key, playlistId) {
      let all = [];
      let pageToken = '';
      do {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&pageToken=${pageToken}&key=${API_KEY}`;
        const resp = await fetch(url);
        const data = await resp.json();
        all = all.concat(data.items);
        pageToken = data.nextPageToken || '';
      } while (pageToken);
      setVideosMap(mp => ({ ...mp, [key]: all }));
    }

    Object.entries(playlistMap).forEach(([key, listId]) => {
      if (listId) {
        fetchVideosFor(key, listId);
      }
    });
  }, [playlistMap, API_KEY]);

  return (
    <div>
      {KEYWORDS.map(({ key, title }) =>
        videosMap[key] && videosMap[key].length > 0 ? (
          <section key={key}>
            <h2 style={{ color: 'white', margin: '1rem' }}>{title}</h2>
            <div className="video-row">
              {videosMap[key].map(item => {
                const vid = item.snippet.resourceId.videoId;
                const thumb = item.snippet.thumbnails.high?.url;
                return (
                  <a
                    key={vid}
                    href={`https://www.youtube.com/watch?v=${vid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-box"
                  >
                    <img src={thumb} alt={item.snippet.title} />
                  </a>
                );
              })}
            </div>
          </section>
        ) : null
      )}
    </div>
  );
};
  
  }
