import React, { Component } from "react";
import "./feed-posts.scss";

import Post from "./Post"; // Предположим, что у вас есть компонент Post
import search from "../feed-sidebar/img/search.svg";
import { constants } from '../../constants'

class FeedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postStart:0,
            postEnd:12,
        };
    }

    setPosts() {
        this.setState({
            postStart: 0,
            postEnd: 12,
        });
    }


    componentDidMount() {
        const { postStart, postEnd } = this.state;

        fetch(`${constants.postApiV1}/posts?skip=${postStart}&limit=${postEnd}`)
          .then((response) => {
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
          })
          .then((posts) => {
              this.setState({ posts });
          })
          .catch((error) => {
              console.error("error:", error);
          });
    }

    toggleComments = (id) => {
        this.setState((prevState) => ({
            isCommentsOpen: {
                ...prevState.isCommentsOpen,
                [id]: !prevState.isCommentsOpen[id], // Переключаем статус
            },
        }));
    };

    render() {
        const { posts, isCommentsOpen } = this.state;

        return (
          <section className="feed">
              <div className="feed__container">
                  <div className="feed__title">
                      <div className="feed__title-search">
                          <img src={search} alt="" />
                          <input type="text" placeholder="Search Y" />
                      </div>
                  </div>

                  {posts.map((post) => (
                    <Post
                      key={post.id}
                      postData={post}
                      onToggleComments={() => this.toggleComments(post.id)}
                    />
                  ))}
              </div>
          </section>
        );
    }
}

export default FeedPosts;
