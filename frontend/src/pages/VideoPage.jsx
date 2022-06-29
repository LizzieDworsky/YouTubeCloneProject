import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { googleApiKey } from "../keys";

import Mapping from "../components/Mapping";
import VideoPlayer from "../components/VideoPlayer";
import DisplayTitleDescription from "../components/DisplayTitleDescription";

const VideoPage = () => {
    const [currentVideo, setCurrentVideo] = useState([]);
    const [similarVideos, setSimilarVideos] = useState([]);
    const { videoId } = useParams();

    useEffect(() => {
        getVideoInfo();
    }, []);

    useEffect(() => {
        getSimilarVideos();
    }, [videoId]);

    async function getVideoInfo() {
        try {
            let response = await axios.get(
                "https://youtube.googleapis.com/youtube/v3/videos?id=" +
                    videoId +
                    "&type=video&key=" +
                    googleApiKey +
                    "&part=snippet"
            );
            setCurrentVideo(response.data.items);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function getSimilarVideos() {
        try {
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=" +
                    videoId +
                    "&type=video&key=" +
                    googleApiKey +
                    "&part=snippet&maxResults=4"
            );
            setSimilarVideos(response.data.items);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <div>
                <VideoPlayer videoId={videoId} />
                {console.log(currentVideo)}
                {/* <DisplayTitleDescription array={currentVideo} /> */}
                {/* I can't figure out how to set up the conditional return for Title and Description */}
            </div>
            <div>
                <Mapping array={similarVideos} />
            </div>
        </div>
    );
};

export default VideoPage;
