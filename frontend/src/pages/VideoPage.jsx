import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import { googleApiKey } from "../keys";

import Mapping from "../components/Mapping";
import VideoPlayer from "../components/VideoPlayer";
import CommentList from "../components/CommentList";
import DisplayTitleDescription from "../components/DisplayTitleDescription";
import CommentForm from "../components/CommentForm";
import useAuth from "../hooks/useAuth";

const VideoPage = () => {
    const { user, token } = useAuth();
    const [videoComments, setVideoComments] = useState([]);
    const [currentVideo, setCurrentVideo] = useState([]);
    const [similarVideos, setSimilarVideos] = useState([]);
    const { videoId } = useParams();

    useEffect(() => {
        getVideoInfo();
    }, []);

    useEffect(() => {
        getSimilarVideos();
    }, [videoId]);

    useEffect(() => {
        getAllComments();
    }, []);

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

    async function getAllComments() {
        let response = await axios.get(
            "http://127.0.0.1:8000/api/comments/" + videoId + "/"
        );
        setVideoComments(response.data);
    }

    async function createComment(newComment) {
        let response = await axios.post(
            "http://127.0.0.1:8000/api/comments/users/" + videoId + "/",
            newComment,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
        if (response.status === 201) {
            await getAllComments();
        } else {
            console.log(response.status);
        }
    }

    return (
        <div>
            <div>
                <VideoPlayer videoId={videoId} />
                {console.log(currentVideo)}
                <DisplayTitleDescription array={currentVideo} />
            </div>
            <div>
                <Mapping array={similarVideos} />
            </div>
            <div>
                <CommentForm addComment={createComment} />
            </div>
            <div className="comment-list-div">
                <CommentList array={videoComments} />
            </div>
        </div>
    );
};

export default VideoPage;
