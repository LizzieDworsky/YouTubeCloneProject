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
                            <Link to={`/video/${item.id.videoId}`}>
                                <img
                                    src={item.snippet.thumbnails.high.url}
                                    alt="video thumbnail"
                                />
                                <div>{item.snippet.title}</div>
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

export default Mapping;
