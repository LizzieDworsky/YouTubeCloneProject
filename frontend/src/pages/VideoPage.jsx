import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Mapping from "../components/Mapping";
import VideoPlayer from "../components/VideoPlayer";

const VideoPage = () => {
    const [similarVideos, setSimilarVideos] = useState([]);
    const { videoId } = useParams();
    console.log(videoId);

    useEffect(() => {
        getSimilarVideos();
    }, []);

    async function getSimilarVideos() {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=Shl9yb5DMao&type=video&key=AIzaSyDmDC6WaZZyIWfcF-Mi5tVZ3AruJlNDRKM&part=snippet&maxResults=3`
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
            <VideoPlayer />
            <Mapping array={similarVideos} />
        </div>
    );
};

export default VideoPage;
