import React, {Component} from "react";

import "./welcome.scss"
import Popup from "../welcome-popup/welcome-popup";


class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPopupVisible: false,
            activePopup: null,
        };
    }

    openPopup = (popupType) => {
        this.setState({ activePopup: popupType, isPopupVisible: true });
    };

    closePopup = () => {
        this.setState({ activePopup: null, isPopupVisible: false });
    };

    render() {

        const {isPopupVisible, activePopup} = this.state;

        return (
            <div className='app'>
                <section className="welcome">
                    <div className="container">
                        <div className="welcome-container">
                            <div className="welcome-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true"
                                     className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr">
                                    <g>
                                        <path
                                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="welcome-content">
                                <div className="title-1"><h1>Happening now</h1></div>
                                <div className="title-2"><h2>Join today.</h2></div>
                                <div className="welcome-google__links">
                                </div>
                                <button
                                    onClick={() => this.openPopup('createAccount')}
                                    id="signUp" className="btn"><span>Create account</span></button>
                                <div className="welcome-or">
                                    <span>or</span>
                                </div>
                                <div className="welcome-description">
                                    {/*<p>By signing up, you agree to the <a href="/">Terms of Service</a> and <a href="/">Privacy*/}
                                    {/*    Policy</a>, including <a href="/">Cookie Use.</a></p>*/}
                                    <p>say scooby doo but replace all the o with e</p>
                                </div>
                                <div className="welcome-account">
                                    <span>Already have an account?</span>
                                    <button
                                        onClick={() => this.openPopup('signIn')}
                                        id="signIn" className="btn"><span>Sign in</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {isPopupVisible && (
                    <Popup
                        onClose={this.closePopup}
                        activePopup={activePopup}
                    />
                )}
            </div>
        )
    }
}

export default Welcome