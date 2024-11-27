import React, {useEffect, useState} from "react";
import {useAuth} from "../../context/authContext";

export default function Comment({commentData}) {
    const [comment, setComment] = useState(commentData);
    const [commentOwner, setCommentOwner] = useState(null);
    const {getUser} = useAuth();

    useEffect(() => {
        async function fetchOwner() {
            setCommentOwner(await getUser(comment.user_id))
        }
        fetchOwner();
    }, []);

    return (
        <div className="tweet__comment">
            <div className="tweet__comment-avatar">
                <img src={commentOwner && commentOwner.avatar} alt=""/>
            </div>
            <div className="tweet__comment-inner">
                <div className="tweet__comment-title">
                    <div className="tweet__comment-title_user"><a href={`users/${commentOwner ? commentOwner.id : 1}`}>{commentOwner && commentOwner.nickname}</a></div>
                    <div className="tweet__comment-title_date"><span>{comment && comment.created_at}</span></div>
                </div>
                <div className="tweet__comment-text">
                    {comment.content}
                </div>
            </div>
        </div>
    );
}