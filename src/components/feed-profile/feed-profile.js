import "./feed-profile.scss";
import React, { Component } from "react";
import postAva from "../feed-posts/img/tweet-logo1.png";
import postImg from "../feed-posts/img/tweet-img1.png";
import Popup from "../feed-profile-popup/feed-profile-popup";

class FeedProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupVisible:false,
            activeTab: "1",
            posts: [ // Твиты для вкладки "Posts"
                {
                    id: 1,
                    avatar: postAva,
                    username: "The New York Times",
                    tag: "@nytimes",
                    time: "2h",
                    content: "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
                    image: postImg,
                    commentsCount: 19,
                    likesCount: 482,
                    activeButtons: {
                        comment: false,
                        like: false,
                    },
                },
                // Добавьте больше твитов, если нужно
            ],
            likes: [ // Твиты для вкладки "Likes"
                {
                    id: 2,
                    avatar: postAva,
                    username: "Tech Crunch",
                    tag: "@techcrunch",
                    time: "1h",
                    content: "New developments in the world of tech. Stay tuned for more updates!",
                    image: postImg,
                    commentsCount: 12,
                    likesCount: 300,
                    activeButtons: {
                        comment: false,
                        like: false,
                    },
                },
                // Добавьте больше твитов, если нужно
            ],
            reposts: [ // Твиты для вкладки "Reposts"
                {
                    id: 3,
                    avatar: postAva,
                    username: "CNN",
                    tag: "@cnn",
                    time: "3h",
                    content: "Breaking news update.",
                    image: postImg,
                    commentsCount: 8,
                    likesCount: 150,
                    activeButtons: {
                        comment: false,
                        like: false,
                    },
                },
                {
                    id: 4,
                    avatar: postAva,
                    username: "CNN",
                    tag: "@cnn",
                    time: "3h",
                    content: "Breaking news update.",
                    image: postImg,
                    commentsCount: 8,
                    likesCount: 150,
                    activeButtons: {
                        comment: false,
                        like: false,
                    },
                },
                {
                    id: 5,
                    avatar: postAva,
                    username: "CNN",
                    tag: "@cnn",
                    time: "3h",
                    content: "Breaking news update.",
                    image: postImg,
                    commentsCount: 8,
                    likesCount: 150,
                    activeButtons: {
                        comment: false,
                        like: false,
                    },
                },
                // Добавьте больше твитов, если нужно
            ],
        };
    }

    openPopup = () => {
        this.setState({isPopupVisible: true });
    };

    closePopup = () => {
        this.setState({isPopupVisible: false });
    };

    toggleButton = (tab, tweetId, button) => {
        this.setState((prevState) => ({
            [tab]: prevState[tab].map((tweet) =>
                tweet.id === tweetId
                    ? {
                        ...tweet,
                        activeButtons: {
                            ...tweet.activeButtons,
                            [button]: !tweet.activeButtons[button],
                        },
                    }
                    : tweet
            ),
        }));
    };

    handleTabClick = (tab) => {
        this.setState({ activeTab: tab });
    };

    renderTweets(tweets, tab) {
        return tweets.map((tweet) => (
            <div key={tweet.id} className="tweet feed-profile__page-tab">
                <a href="/" className="tweet__avatar"><img src={tweet.avatar} alt="" /></a>
                <div className="tweet__information">
                    <div className="tweet__title">
                        <a href="/" className="tweet__title-name">{tweet.username}</a>
                        <div className="tweet__title-tag">{tweet.tag}</div>
                        <div className="tweet__title-time">{tweet.time}</div>
                    </div>
                    <div className="tweet__content">
                        <p>{tweet.content}</p>
                        {tweet.image && (
                            <div className="tweet__content-img">
                                <img src={tweet.image} alt="" />
                            </div>
                        )}
                    </div>
                    <div className="tweet__controls">
                        <div
                            className={`tweet__btn tweet__btn--comment ${tweet.activeButtons.comment ? "active" : ""}`}
                            onClick={() => this.toggleButton(tab, tweet.id, "comment")}
                        >
                            <div className="tweet__btn-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.705 1.86833L8.24834 1.86H8.24667C4.60167 1.86 1.74667 4.71583 1.74667 8.36167C1.74667 11.7767 4.40167 14.3667 7.96751 14.5033V17.6933C7.96751 17.7833 8.00417 17.9317 8.06751 18.0292C8.18584 18.2167 8.38751 18.3183 8.59417 18.3183C8.70917 18.3183 8.82501 18.2867 8.92917 18.22C9.14917 18.08 14.3233 14.77 15.6692 13.6317C17.2542 12.29 18.2025 10.3233 18.205 8.37167V8.3575C18.2 4.71833 15.3467 1.86833 11.705 1.8675V1.86833ZM14.8608 12.6783C13.9158 13.4783 10.8092 15.5158 9.21751 16.5475V13.8917C9.21751 13.5467 8.93834 13.2667 8.59251 13.2667H8.26251C5.21251 13.2667 2.99751 11.2033 2.99751 8.36167C2.99751 5.41667 5.30417 3.11 8.24751 3.11L11.7033 3.11833H11.705C14.6483 3.11833 16.955 5.42333 16.9567 8.365C16.9542 9.95667 16.1717 11.5683 14.8617 12.6783H14.8608Z"
                                        fill="#6E767D"/>
                                </svg>
                            </div>
                            <span>{tweet.commentsCount}</span>
                        </div>
                        <div
                            className={`tweet__btn tweet__btn--like ${tweet.activeButtons.like ? "active" : ""}`}
                            onClick={() => this.toggleButton(tab, tweet.id, "like")}
                        >
                            <div className="tweet__btn-icon">
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 16.0317H8.98833C6.83583 15.9917 0.625 10.38 0.625 5.065C0.625 2.51167 2.72917 0.27 5.1275 0.27C7.03583 0.27 8.31917 1.58667 8.99917 2.545C9.6775 1.58833 10.9608 0.27 12.87 0.27C15.27 0.27 17.3733 2.51167 17.3733 5.06583C17.3733 10.3792 11.1617 15.9908 9.00917 16.03H9V16.0317ZM5.12833 1.52083C3.395 1.52083 1.87583 3.1775 1.87583 5.06667C1.87583 9.85 7.7375 14.73 9.00083 14.7817C10.2658 14.73 16.1258 9.85083 16.1258 5.06667C16.1258 3.1775 14.6067 1.52083 12.8733 1.52083C10.7667 1.52083 9.59 3.9675 9.58 3.99167C9.38833 4.46 8.61667 4.46 8.42417 3.99167C8.4125 3.96667 7.23667 1.52083 5.12917 1.52083H5.12833Z"
                                        fill="#6E767D"/>
                                </svg>
                            </div>
                            <span>{tweet.likesCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        const {activeTab, posts, likes, reposts, isPopupVisible} = this.state;
        const tweets = activeTab === "1" ? posts : activeTab === "2" ? likes : reposts;

        return (
            <section className="feed-profile">
                <div className="container">
                    <div className="feed-profile__head">
                        <div className="feed-profile__title">
                            <div className="feed-profile__title-avatar"></div>
                            <div className="feed-profile__title-btn">
                                <button onClick={this.openPopup}><span>Change profile</span></button>
                            </div>
                        </div>
                        <div className="feed-profile__info">
                            <div className="feed-profile__info-name"><span>Name Example</span></div>
                            <div className="feed-profile__info-username"><span>@username</span></div>
                            <div className="feed-profile__info-registered"><span>Registered: august 2018 y.</span></div>
                        </div>
                        <div className="feed-profile__tabs">
                            <div
                                data-tab="1"
                                className={`feed-profile__tabs-tab ${activeTab === "1" ? "active" : ""}`}
                                onClick={() => this.handleTabClick("1")}
                            >
                                <span>Posts</span>
                            </div>
                            <div
                                data-tab="2"
                                className={`feed-profile__tabs-tab ${activeTab === "2" ? "active" : ""}`}
                                onClick={() => this.handleTabClick("2")}
                            >
                                <span>Likes</span>
                            </div>
                            <div
                                data-tab="3"
                                className={`feed-profile__tabs-tab ${activeTab === "3" ? "active" : ""}`}
                                onClick={() => this.handleTabClick("3")}
                            >
                                <span>Reposts</span>
                            </div>
                        </div>
                    </div>
                    <div className="feed-profile__content">
                        {this.renderTweets(tweets, activeTab === "1" ? "posts" : activeTab === "2" ? "likes" : "reposts")}
                    </div>
                </div>
                {isPopupVisible && (
                    <Popup
                        onClose={this.closePopup}
                    />
                )}
            </section>
        );
    }
}

export default FeedProfile;
