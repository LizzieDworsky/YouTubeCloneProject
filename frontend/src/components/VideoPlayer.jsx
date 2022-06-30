import React from "react";

const VideoPlayer = ({ videoId }) => {
    return (
        <iframe
            className="video-player"
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="fullscreen"
        ></iframe>
    );
};

export default VideoPlayer;
