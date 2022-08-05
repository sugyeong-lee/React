import React from "react";
import Comment from "./Comment";

const comments = {
    {
        name:"이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name:"이인수",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name:"이인자",
        comment: "안녕하세요, 소플입니다.",
    },
};


function CommentList(props) {
    return (
        <div>
            <Comment name={comment.name} comment={comment.comment} />
        </div>
    );
}

export default CommentList;