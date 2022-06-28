import React from "react";

const VideoPlayer = (props) => {
    return (
        <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE"
            frameBorder="0"
        ></iframe>
    );
};

export default VideoPlayer;
