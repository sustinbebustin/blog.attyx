import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-container">
      <iframe
        src={videoUrl}
        title="Training Video"
        className="video-frame"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
