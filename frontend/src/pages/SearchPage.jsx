import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { googleApiKey } from "../keys";

import SearchBar from "../components/SearchBar";
import Mapping from "../components/Mapping";

const SearchPage = () => {
    const [videoSearchData, setVideoSearchData] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState("cats");

    useEffect(() => {
        getVideosSearch();
    }, []);

    async function getVideosSearch() {
        try {
            let response = await axios.get(
                "https://www.googleapis.com/youtube/v3/search?q=" +
                    searchCriteria +
                    "&key=" +
                    googleApiKey +
                    "&type=video&part=snippet&maxResults=6"
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
            <div>
                <SearchBar setState={setSearchCriteria} />
                <button onClick={getVideosSearch}>Search</button>
            </div>
            <Mapping array={videoSearchData} />
        </div>
    );
};

export default SearchPage;
