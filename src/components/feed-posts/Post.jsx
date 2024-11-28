import React, {useEffect, useRef, useState} from 'react'
import postAva from './img/tweet-logo1.png';
import Comment from './post-comments';
import postSettingsImg from './img/dots.svg'
import { useAuth } from '../../context/authContext'
import {constants} from "../../constants";

export default function Post({ postData }) {
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [postOwner, setPostOwner] = useState(null);
  const [post, setPost] = useState(postData);
  const {user, sendRequest, getUser} = useAuth();
  const [showSettings, setShowSettings] = useState(false);
  const [value, setValue] = useState('');
  const textareaRef = useRef(null)
  ;
  useEffect(() => {
    async function fetchPostOwner() {
      setPostOwner(await getUser(post.user_id))
    }
    fetchPostOwner();
  }, []);


  function updatePostInfo() {
    sendRequest({
      url: `${constants.postApiV1}/posts/${post.id}`,
      method: 'GET',
    }).then(async (response) => {
      if (!response.ok) {
        console.log('Error liking post: ', response);
        return
      }
      return await response.json();
    }).then((post) => {
      setPost(post)
    })
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
    setValue(e.target.value);
  };

  function likePost() {
    sendRequest({
      url: `${constants.postApiV1}/posts/${post.id}/${post.is_liked ? 'unlike' : 'like'}`,
      method: 'GET',
    }).then((response) => {
      if (!response.ok) {
        console.log('Error liking post: ', response);
        return
      }
      updatePostInfo()
    })
  }


  function commentPost() {
    if (newComment.trim() === "") {
      return;
    }
    sendRequest({
      url: `${constants.postApiV1}/posts/${post.id}/comments`,
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: newComment }),
    }).then((response) => {
      if (!response.ok) {
        console.log('Error commenting post: ', response);
        return
      }
      updatePostInfo()
    })
    setNewComment("");
  }


  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
  <div className="tweet">
    <div className="tweet__inner">
      <a href="/" className="tweet__avatar"><img src={postOwner && postOwner.avatar} alt=""/></a>
      <div className="tweet__information">
        <div className={`tweet__settings  ${showSettings ? 'show' : ''}`}>
          <div onClick={() => {
            setShowSettings(!showSettings)
          }} className={"tweet__settings-btn "}><img src={postSettingsImg} alt=""/></div>
          <div className="tweet__settings-list">
            <ul>
              {(post.user_id !== user.id && !user.admin) && <li><span>Report</span></li>}

              {(user.admin || post.user_id === user.id) &&
                  <>
                    <li><span>Edit</span></li>
                    <li><span>Delete</span></li>
                  </>
              }
            </ul>
          </div>
        </div>
        <div className="tweet__title">
          {/*<a href="/" className="tweet__title-name">{postData.name}</a>*/}
          <a href={`users/${postOwner ? postOwner.id : 1}`} className={`tweet__title-name`}>{postOwner ? postOwner.nickname : 'postownernick'}</a>
          <div className="tweet__title-tag">{post.tag}</div>
          <div className="tweet__title-time">{post.posted_at}</div>
        </div>
        <div className="tweet__content">
          <span>{post.title}</span>
          <p>{post.content}</p>
          {
              post && post.image_urls && post.image_urls.length > 0 &&
              <div className="tweet__content-img">
                <img src={post.image_urls[0]} alt='post img'/>
              </div>
          }
        </div>
        <div className="tweet__controls">
          <div
              className={`tweet__btn tweet__btn--like ${post && post.is_liked && 'active'}`}
              onClick={likePost}
          >
            <div className="tweet__btn-icon">
              <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M9 16.0317H8.98833C6.83583 15.9917 0.625 10.38 0.625 5.065C0.625 2.51167 2.72917 0.27 5.1275 0.27C7.03583 0.27 8.31917 1.58667 8.99917 2.545C9.6775 1.58833 10.9608 0.27 12.87 0.27C15.27 0.27 17.3733 2.51167 17.3733 5.06583C17.3733 10.3792 11.1617 15.9908 9.00917 16.03H9V16.0317ZM5.12833 1.52083C3.395 1.52083 1.87583 3.1775 1.87583 5.06667C1.87583 9.85 7.7375 14.73 9.00083 14.7817C10.2658 14.73 16.1258 9.85083 16.1258 5.06667C16.1258 3.1775 14.6067 1.52083 12.8733 1.52083C10.7667 1.52083 9.59 3.9675 9.58 3.99167C9.38833 4.46 8.61667 4.46 8.42417 3.99167C8.4125 3.96667 7.23667 1.52083 5.12917 1.52083H5.12833Z"
                    fill="#6E767D"
                />
              </svg>
            </div>
            <span>{post.likes_amount}</span>
          </div>

          <div
              className="tweet__btn tweet__btn--comments"
              onClick={() => {
                setShowComments(!showComments)
              }}
          >
            <div className="tweet__btn-icon">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6E767D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <span>{post.comments_amount}</span>
          </div>
        </div>
      </div>
    </div>
    {showComments && (
      <div className="tweet__comments">
        <div className="tweet__comments-controls">
        <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
        />
          <button className="btn tweet__comments-controls_btn" onClick={commentPost}>
            Add
          </button>
        </div>
        <div className="tweet__comments-list">
          {post.comments.map((comment) => (
              <Comment key={comment.id} commentData={comment}/>
          ))}
        </div>
      </div>
    )}
  </div>
  );
}