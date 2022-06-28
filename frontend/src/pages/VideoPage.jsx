import axios from "axios";
import React, { useState, useEffect } from "react";

import Mapping from "../components/Mapping";

const VideoPage = () => {
    const [similarVideos, setSimilarVideos] = useState([]);

    useEffect(() => {
        getSimilarVideos();
    }, []);

    async function getSimilarVideos() {
        try {
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=Shl9yb5DMao&type=video&key=AIzaSyDmDC6WaZZyIWfcF-Mi5tVZ3AruJlNDRKM&part=snippet&maxResults=3"
            );
            console.log(response.data);
            setSimilarVideos(response.data.items);
        } catch (error) {
            console.log(error.response.data);
        }
        console.log(similarVideos);
    }

    return (
        <div>
            <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src="https://www.youtube.com/embed/M7lc1UVf-VE"
                frameBorder="0"
            ></iframe>
            <div>
                <Mapping array={similarVideos} />
            </div>
        </div>
    );
};

export default VideoPage;
