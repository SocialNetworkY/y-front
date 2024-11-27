import "./welcome.scss";
import Popup from "../popup/popup";
import logo from "../../img/logo.svg";
import { useState } from "react";
import { PopupAuth } from "./popupAuth";
import { PopupLogin } from "./popupLogin";

export default function Welcome() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (content) => {
        setPopupContent(() => content);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <section className="welcome">
            <div className="container">
                <div className="welcome-container">
                    <div className="welcome-icon">
                        <img src={logo} alt="" />
                    </div>
                    <div className="welcome-content">
                        <div className="title-2"><h2>Join today.</h2></div>
                        <div className="welcome-google__links">
                        </div>
                        <button
                            onClick={() => openPopup(<PopupAuth />)}
                            id="signUp" className="btn"><span>Create account</span></button>
                        <div className="welcome-or">
                            <span>or</span>
                        </div>
                        <div className="welcome-account">
                            <span>Already have an account?</span>
                            <button
                                onClick={() => openPopup(<PopupLogin />)}
                                id="signIn" className="btn"><span>Sign in</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                {popupContent}
            </Popup>
        </section>
    );
}