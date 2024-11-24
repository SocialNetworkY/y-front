import React from "react";

export default function Popup({ isOpen, onClose, children }) {
    return isOpen && (
        <div className="popup">
            <div onClick={onClose} className="popup-overlay" />
            <div className="popup-content">
                {children}
            </div>
        </div>
    );
}

export function handleInputFocus(event) {
    const popupInput = event.currentTarget;
    const input = popupInput.querySelector("input");

    if (!popupInput.classList.contains("focus")) {
        input.focus();
        popupInput.classList.add("focus");
    }
}

export function handleInputBlur(event) {
    const popupInput = event.currentTarget.closest(".popup-input");
    if (!event.currentTarget.classList.contains("popup-input") && !event.currentTarget.value.length > 0 ) {
        popupInput.classList.remove("focus");
    }
}
