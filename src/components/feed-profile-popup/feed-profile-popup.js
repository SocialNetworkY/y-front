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
}


export default Popup;
