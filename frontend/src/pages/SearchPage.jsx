import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import Mapping from "../components/Mapping";

const SearchPage = () => {
    const [videoSearchData, setVideoSearchData] = useState([]);

    useEffect(() => {
        getVideosSearch();
    }, []);

    async function getVideosSearch() {
        try {
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?q=cats&key=AIzaSyDmDC6WaZZyIWfcF-Mi5tVZ3AruJlNDRKM&type=video&part=snippet"
            );
            console.log(response.data);
            setVideoSearchData(response.data.items);
        } catch (error) {
            console.log(error.response.data);
        }
        console.log(videoSearchData);
    }

    return (
        <div>
            <SearchBar />
            <Mapping array={videoSearchData} />
        </div>
    );
};

export default SearchPage;
