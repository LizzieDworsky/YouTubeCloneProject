import React from "react";

const Comment = ({ comment }) => {
    return (
        <div>
            {console.log(comment)}
            <h3>{comment.user.username}</h3>
            <p>{comment.text}</p>
            <p>Hello World</p>
        </div>
    );
};

export default Comment;
