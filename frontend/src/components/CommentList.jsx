import React from "react";

import Comment from "./Comment";

const CommentList = ({ array }) => {
    return (
        <>
            {console.log("array", array)}
            <p>Hello World</p>
            {array.map((item) => (
                <p>hi</p>
            ))}
            <p>after map</p>
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
