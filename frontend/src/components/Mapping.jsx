import React from "react";
import { Link } from "react-router-dom";

const Mapping = ({ array }) => {
    function handleClick() {}

    return (
        <ul>
            {array.map((item) => {
                if (item.snippet) {
                    return (
                        <li key={item.id.videoId}>
                            <div>{item.snippet.title}</div>
                            <Link to={`/video/${item.id.videoId}`}>
                                <button>See Video</button>
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

export default Mapping;
