import React, { Component, useState } from 'react'
import {useEffect} from 'react'
import "./feed-posts.scss";

import Post from "./Post";
import search from "../feed-sidebar/img/search.svg";
import { constants } from '../../constants'
import { useAuth } from '../../context/authContext'
import uploadImg from './img/svgrepo-com.svg'


export default function FeedPosts() {
  const [posts, setPosts] = useState([]);
  const [postStart, setPostStart] = useState(0);
  const [postEnd, setPostEnd] = useState(50);
  const [newPost, setNewPost] = useState({ title: "", content: "", tags: [], images: [], videos: [] });
  const {sendRequest} = useAuth()

  useEffect(() => {
    fetch(`${constants.postApiV1}/posts?skip=${postStart}&limit=${postEnd}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((posts) => {
        setPosts(posts)
        console.log(posts);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, [])

  function handleAddPost (){
    if (!newPost.title || !newPost.content) return;

    const formData = new FormData();
    formData.append('title', newPost.title)
    formData.append('content', newPost.content)
    newPost.tags.forEach((tag) => {
      formData.append("tags", tag)
    })
    newPost.images.forEach((image) => formData.append(`images`, image));
    newPost.videos.forEach((video) => formData.append(`videos`, video));

    console.log(newPost)
    sendRequest({
      url: `${constants.postApiV1}/posts`,
      method: 'POST',
      body: formData,
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }).then(post => {
      setPosts((prevPosts) => [post, ...prevPosts]);
      setNewPost({ title: "", content: "", tags: [], videos: [], images: [] });
    }).catch((error) => {
      console.error("error:", error);
    })
  }

  function handleInputChange (e){
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  }

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const images = selectedFiles.filter((file) => file.type.startsWith("image/"));
    const videos = selectedFiles.filter((file) => file.type.startsWith("video/"));

    setNewPost((prevPost) => ({
      ...prevPost,
      images: images,
      videos: videos,
    }));
  };

  return (
    <section className="feed">
      <div className="feed__container">
        <div className="feed__title">
          <div className="feed__title-search">
            <img src={search} alt=""/>
            <input type="text" placeholder="Search Y"/>
          </div>
        </div>
        <div>
          <div className="feed__create">
            <div className="feed__create-inner">
              <div className="feed__create-inputs">
                <input
                    type="text"
                    name="title"
                    value={newPost.title}
                    placeholder="Title"
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Type Tags"
                    onChange={(e) => {
                      setNewPost((prevPost) => ({
                        ...prevPost,
                        tags: e.target.value.split(',').map(tag => tag.trim()).filter((tag) => tag),
                      }))
                    }}
                />
                <textarea
                    name="content"
                    value={newPost.content}
                    placeholder="Write your post..."
                    onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
            <div className="feed__create-buttons">
              <label className="feed__create-input">
                <img src={uploadImg} alt=""/>
                <input name="" type="file" onChange={handleFilesChange}/>
              </label>
              <button className='btn' onClick={handleAddPost}>Add Post</button>
            </div>
          </div>

          <div className="posts-list">
            {posts.map((post) => (
                <Post key={post.id} postData={post}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}