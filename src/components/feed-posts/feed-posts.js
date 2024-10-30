import "./feed-posts.scss";
import { Component } from "react";

class feedPosts extends Component {

    constructor(props) {
        super(props);
        // Инициализируем состояние для хранения активности каждой кнопки
        this.state = {
            activeButtons: {
                comment: false,
                retweet: false,
                like: false,
                save: false
            }
        };
    }

    // Метод для переключения состояния активности конкретной кнопки
    toggleButton = (buttonName) => {
        this.setState((prevState) => ({
            activeButtons: {
                ...prevState.activeButtons,
                [buttonName]: !prevState.activeButtons[buttonName]
            }
        }));
    }

    render() {
        const { activeButtons } = this.state;

        return (
            <section className="feed">
                <div className="container">
                    <div className="feed__container">
                        <div className="feed__title">
                            <div className="title-1"><h1>Home</h1></div>
                            <div className="feed-ai">
                                <img src="img/ai-icon.svg" alt="" />
                            </div>
                        </div>
                        <div className="tweet">
                            <a href="/" className="tweet__avatar"><img src="img/tweet-logo1.png" alt="" /></a>
                            <div className="tweet__content">
                                <div className="tweet__title">
                                    <a href="/" className="tweet__title-name">The New York Times</a>
                                    <div className="tweet__title-tag">@nytimes</div>
                                    <div className="tweet__title-time">2h</div>
                                </div>
                                <div className="tweet__content">
                                    <p>Gardening boomed during the pandemic. Six Black writers share how it has helped
                                        them re-establish, and reimagine, a connection to cultivation and the land</p>
                                    <div className="tweet__content-img">
                                        <img src="img/tweet-img1.png" alt="" />
                                    </div>
                                </div>
                                <div className="tweet__controls">
                                    <div
                                        className={`tweet__btn tweet__btn--comment ${activeButtons.comment ? 'active' : ''}`}
                                        onClick={() => this.toggleButton('comment')}
                                    >
                                        <div className="tweet__btn-icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11.705 1.86833L8.24834 1.86H8.24667C4.60167 1.86 1.74667 4.71583 1.74667 8.36167C1.74667 11.7767 4.40167 14.3667 7.96751 14.5033V17.6933C7.96751 17.7833 8.00417 17.9317 8.06751 18.0292C8.18584 18.2167 8.38751 18.3183 8.59417 18.3183C8.70917 18.3183 8.82501 18.2867 8.92917 18.22C9.14917 18.08 14.3233 14.77 15.6692 13.6317C17.2542 12.29 18.2025 10.3233 18.205 8.37167V8.3575C18.2 4.71833 15.3467 1.86833 11.705 1.8675V1.86833ZM14.8608 12.6783C13.9158 13.4783 10.8092 15.5158 9.21751 16.5475V13.8917C9.21751 13.5467 8.93834 13.2667 8.59251 13.2667H8.26251C5.21251 13.2667 2.99751 11.2033 2.99751 8.36167C2.99751 5.41667 5.30417 3.11 8.24751 3.11L11.7033 3.11833H11.705C14.6483 3.11833 16.955 5.42333 16.9567 8.365C16.9542 9.95667 16.1717 11.5683 14.8617 12.6783H14.8608Z"
                                                    fill="#6E767D"/>
                                            </svg>
                                        </div>
                                        <span>19</span>
                                    </div>
                                    <div
                                        className={`tweet__btn tweet__btn--retweet ${activeButtons.retweet ? 'active' : ''}`}
                                        onClick={() => this.toggleButton('retweet')}
                                    >
                                        <div className="tweet__btn-icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.8083 13.0583C19.565 12.8142 19.1692 12.8142 18.925 13.0583L17.075 14.9083V6.375C17.075 4.65167 15.6725 3.25 13.95 3.25H9.075C8.73 3.25 8.45 3.53 8.45 3.875C8.45 4.22 8.73 4.5 9.075 4.5H13.95C14.9833 4.5 15.825 5.34167 15.825 6.375V14.9083L13.975 13.0583C13.7308 12.8142 13.335 12.8142 13.0917 13.0583C12.8483 13.3025 12.8467 13.6983 13.0917 13.9417L16.0083 16.8583C16.1292 16.9808 16.2892 17.0417 16.45 17.0417C16.6108 17.0417 16.7692 16.9817 16.8917 16.8583L19.8083 13.9417C20.0533 13.6983 20.0533 13.3025 19.8083 13.0583V13.0583ZM10.925 15.7917H6.05C5.01667 15.7917 4.175 14.95 4.175 13.9167V5.38333L6.025 7.23333C6.14833 7.35583 6.30833 7.41667 6.46833 7.41667C6.62833 7.41667 6.78833 7.35583 6.91 7.23333C7.15416 6.98917 7.15416 6.59333 6.91 6.35L3.99333 3.43333C3.74917 3.18833 3.35333 3.18833 3.11 3.43333L0.193332 6.35C-0.0516675 6.59333 -0.0516675 6.98917 0.193332 7.23333C0.438332 7.4775 0.832499 7.4775 1.07667 7.23333L2.92667 5.38333V13.9167C2.92667 15.64 4.32917 17.0417 6.05167 17.0417H10.9267C11.2717 17.0417 11.5517 16.7617 11.5517 16.4167C11.5517 16.0717 11.2708 15.7917 10.9267 15.7917H10.925Z"
                                                    fill="#6E767D"/>
                                            </svg>
                                        </div>
                                        <span>48</span>
                                    </div>
                                    <div
                                        className={`tweet__btn tweet__btn--like ${activeButtons.like ? 'active' : ''}`}
                                        onClick={() => this.toggleButton('like')}
                                    >
                                        <div className="tweet__btn-icon">
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9 16.0317H8.98833C6.83583 15.9917 0.625 10.38 0.625 5.065C0.625 2.51167 2.72917 0.27 5.1275 0.27C7.03583 0.27 8.31917 1.58667 8.99917 2.545C9.6775 1.58833 10.9608 0.27 12.87 0.27C15.27 0.27 17.3733 2.51167 17.3733 5.06583C17.3733 10.3792 11.1617 15.9908 9.00917 16.03H9V16.0317ZM5.12833 1.52083C3.395 1.52083 1.87583 3.1775 1.87583 5.06667C1.87583 9.85 7.7375 14.73 9.00083 14.7817C10.2658 14.73 16.1258 9.85083 16.1258 5.06667C16.1258 3.1775 14.6067 1.52083 12.8733 1.52083C10.7667 1.52083 9.59 3.9675 9.58 3.99167C9.38833 4.46 8.61667 4.46 8.42417 3.99167C8.4125 3.96667 7.23667 1.52083 5.12917 1.52083H5.12833Z"
                                                    fill="#6E767D"/>
                                            </svg>
                                        </div>
                                        <span>482</span>
                                    </div>
                                    <div
                                        className={`tweet__btn tweet__btn--save ${activeButtons.save ? 'active' : ''}`}
                                        onClick={() => this.toggleButton('save')}
                                    >
                                        <div className="tweet__btn-icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.6084 6.225L10.4417 2.05833C10.1975 1.81417 9.8017 1.81417 9.55836 2.05833L5.3917 6.225C5.1467 6.46917 5.1467 6.865 5.3917 7.10833C5.6367 7.35167 6.03086 7.35333 6.27503 7.10833L9.37503 4.00833V12.5C9.37503 12.845 9.65503 13.125 10 13.125C10.345 13.125 10.625 12.845 10.625 12.5V4.00833L13.725 7.10833C13.8467 7.23083 14.0067 7.29167 14.1667 7.29167C14.3267 7.29167 14.4867 7.23167 14.6084 7.10833C14.8525 6.86417 14.8525 6.46917 14.6084 6.225V6.225Z"
                                                    fill="#6E767D"/>
                                                <path
                                                    d="M16.4234 18.2867H3.57669C2.52335 18.2867 1.66669 17.43 1.66669 16.3767V11.6667C1.66669 11.3217 1.94669 11.0417 2.29169 11.0417C2.63669 11.0417 2.91669 11.3217 2.91669 11.6667V16.3767C2.91669 16.7408 3.21252 17.0367 3.57669 17.0367H16.4234C16.7875 17.0367 17.0834 16.7408 17.0834 16.3767V11.6667C17.0834 11.3217 17.3634 11.0417 17.7084 11.0417C18.0534 11.0417 18.3334 11.3217 18.3334 11.6667V16.3767C18.3334 17.43 17.4767 18.2867 16.4234 18.2867V18.2867Z"
                                                    fill="#6E767D"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default feedPosts;
