import React, {useState} from "react";

export default function Comment({commentData}) {
    const [comment, setComment] = useState(commentData);
    return (
        <div className="tweet__comment">
            <div className="tweet__comment-avatar">
                <img src="" alt=""/>
            </div>
            <div className="tweet__comment-inner">
                <div className="tweet__comment-title">
                    <div className="tweet__comment-user"></div>
                    <div className="tweet__comment-date"></div>
                </div>
                <div className="tweet__comment-text">
                    {comment.content}
                </div>
            </div>
        </div>
    );
}