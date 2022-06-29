import React from "react";

import Comment from "./Comment";

const CommentList = ({ array }) => {
    return (
        <ul>
            {array.map((item) => {
                <li key={item.id}>
                    {console.log(item.user.username)}
                    {console.log(item.text)}
                    <h1>Hello World</h1>
                    <Comment comment={item} />
                </li>;
            })}
        </ul>
    );
};

export default CommentList;
