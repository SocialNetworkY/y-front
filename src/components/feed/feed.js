import {Component} from "react";

import CDN from'../cdn/cdn.js';
import FeedHeader from "../feed-header/feed-header";
import FeedPosts from "../feed-posts/feed-posts";


class Feed extends Component {
    render() {
        return (
            <div className='App'>
                <div className='site-container'>
                    <FeedHeader/>
                    <FeedPosts/>
                </div>
            </div>
        )
    }
}

export default Feed;