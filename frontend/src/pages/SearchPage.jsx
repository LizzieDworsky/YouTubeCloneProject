import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchPage = () => {
    return (
        <div>
            <form>
                <input type="text" />
                <button>Search</button>
            </form>

            <h3>ENTER MAPPER HERE</h3>
        </div>
    );
};

export default SearchPage;
