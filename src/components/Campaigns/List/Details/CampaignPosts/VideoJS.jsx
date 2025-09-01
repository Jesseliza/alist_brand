import "video-react/dist/video-react.css"; // Import the CSS for video-react

import React from "react";
import { Player } from "video-react";

import "./video.scss";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ videoSrc, Poster }) => {
  return (
    <Player poster={Poster}>
      <source src={videoSrc} />
    </Player>
  );
};
