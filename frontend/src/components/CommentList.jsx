import React from "react";

import Comment from "./Comment";

const CommentList = ({ array }) => {
    return (
        <ul>
            {array.map((item) => {
                <li key={item.id}>
                    <Comment comment={item} />
                </li>;
            })}
        </ul>
    );
};

export default CommentList;
