import React from "react";

const Mapping = ({ array }) => {
    return (
        <ul>
            {array.map((item) => (
                <li key={item.id.videoId}>
                    <div>{item.snippet.title}</div>
                </li>
            ))}
        </ul>
    );
};

export default Mapping;
