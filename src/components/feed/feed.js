import { Component } from "react";

import FeedHeader from "../feed-header/feed-header";
import FeedPosts from "../feed-posts/feed-posts";
import FeedSidebar from "../feed-sidebar/feed-sidebar";
import FeedProfile from "../feed-profile/feed-profile";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProfile: false,
        };
    }

    toggleView = (event) => {
        event.preventDefault();
        this.setState((prevState) => ({
            showProfile: !prevState.showProfile,
        }));
    };

    render() {
        return (
            <div className="App">
                <div className="site-container">
                    <FeedHeader toggleView={this.toggleView} />
                    {this.state.showProfile ? <FeedProfile /> : <FeedPosts />}
                    <FeedSidebar />
                </div>
            </div>
        );
    }
}

export default Feed;
