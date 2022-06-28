import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import SearchBar from "../components/SearchBar";

const SearchPage = () => {
    return (
        <div>
            <SearchBar />

            <h3>ENTER MAPPER HERE</h3>
        </div>
    );
};

export default SearchPage;
