import React from "react";

import Comment from "./Comment";

const CommentList = ({ array }) => {
    return (
        <>
            {console.log("array", array)}
            {array.map((item) => (
                <Comment comment={item} />
            ))}
        </>
    );
};

export default CommentList;
//  <li key={item.id}>
//      {console.log(item.user.username)}
//      {console.log(item.text)}
//      <p>Hi</p>
//      <p>{item.text}</p>
//      <Comment comment={item} />
//  </li>;
