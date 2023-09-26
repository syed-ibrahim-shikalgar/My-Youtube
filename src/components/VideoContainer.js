import React, { useEffect, useState } from "react";
import { Youtube_Video_Api } from "../utils/Constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_Video_Api);
    const json = await data.json();
    // console.log("json", json?.items);
    setVideos(json?.items);
  };

  return (
    <div className=" flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video?.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
