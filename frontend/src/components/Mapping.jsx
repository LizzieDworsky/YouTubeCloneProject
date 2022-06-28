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
                                <div>
                                    <img
                                        src={item.snippet.thumbnails.high.url}
                                        alt="video thumbnail"
                                    />
                                    <h3>{item.snippet.title}</h3>
                                    <h4>{item.snippet.description}</h4>
                                </div>
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

export default Mapping;
