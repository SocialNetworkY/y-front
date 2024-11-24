import React from "react";

export default function Comment({comment}) {
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
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
}