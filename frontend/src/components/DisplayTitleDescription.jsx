import React from "react";

const DisplayTitleDescription = ({ array }) => {
    if (array[0]) {
        return (
            <div>
                <h2>{array[0].snippet.title}</h2>
                <p>{array[0].snippet.description}</p>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default DisplayTitleDescription;
