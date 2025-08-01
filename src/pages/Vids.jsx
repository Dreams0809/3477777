import React from "react";
import  YouTubeGrid from '../components/YouTubeGrid.jsx';
import PodVideos from "../components/Playlists/PodVideos.jsx";
import FriendsVideos from "../components/Playlists/FriendsVideos.jsx";
import MomentsVideos from "../components/Playlists/MomentsVideos.jsx";
import BTSVideos from "../components/Playlists/BTSVideos.jsx";

export default function Vids() {
  return (
    <div>
      <h1> LATEST VIDEOS</h1>
      <YouTubeGrid />

      <h1> Pod </h1>
      <PodVideos/>

      <h1> fRiENDS</h1>
      <FriendsVideos />

      <h1>347 Moments</h1>
      <MomentsVideos />

      <h1>Behind the Scenes</h1>
      <BTSVideos />
    
    </div>

  )
  
}
