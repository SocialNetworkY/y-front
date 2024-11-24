import { Component } from "react";
import "./feed-profile-popup.scss";

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    handleInputFocus = (event) => {
        const popupInput = event.currentTarget;
        const input = popupInput.querySelector("input");

        if (!popupInput.classList.contains("focus")) {
            input.focus();
            popupInput.classList.add("focus");
        }
    };

    handleInputBlur = (event) => {
        const popupInput = event.currentTarget.closest(".popup-input");
        if (!event.currentTarget.classList.contains("popup-input")) {
            popupInput.classList.remove("focus");
        }
    };

    render() {
        const { onClose } = this.props;

        return (
            <div className="popup">
                <div onClick={onClose} className="popup-overlay" />
                <div className="popup-content">
                    <div className="popup-title"><h3>Change your account</h3></div>
                    <div onClick={this.handleInputFocus} className="popup-input">
                        <div className="popup-input__text">
                            <span className='popup-input__text-name'>Nickname</span>
                            <span className='popup-input__text-symbols'>0/50</span>
                        </div>
                        <input onBlur={this.handleInputBlur} type="text"/>
                    </div>
                    <div onClick={this.handleInputFocus} className="popup-input">
                        <div className="popup-input__text">
                            <span className='popup-input__text-name'>Username</span>
                            <span className='popup-input__text-symbols'>0/50</span>
                        </div>
                        <input onBlur={this.handleInputBlur} type="text"/>
                    </div>
                    <div onClick={this.handleInputFocus} className="popup-input">
                        <div className="popup-input__text">
                            <span className='popup-input__text-name'>New password</span>
                        </div>
                        <input onBlur={this.handleInputBlur} type="password"/>
                    </div>
                    <div onClick={this.handleInputFocus} className="popup-input">
                        <div className="popup-input__text">
                            <span className='popup-input__text-name'>Confirm password</span>
                        </div>
                        <input onBlur={this.handleInputBlur} type="password"/>
                    </div>
                    <button className="popup-confirm">
                        <span>Confirm</span>
                    </button>
                </div>
            </div>
        );
    }
}


export default Popup;
