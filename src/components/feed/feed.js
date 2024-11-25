import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FeedHeader from "../feed-header/feed-header";
import FeedPosts from "../feed-posts/feed-posts";
import FeedSidebar from "../feed-sidebar/feed-sidebar";

class Feed extends Component {
    render() {
        return (
            <div className="App">
                <div className="site-container">
                    <FeedHeader />
                    <FeedPosts />
                    <FeedSidebar />
                </div>
            </div>
        );
    }
}

export default Feed;
