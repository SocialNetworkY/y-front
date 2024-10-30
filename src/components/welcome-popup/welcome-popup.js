import { Component } from "react";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import "./welcome-popup.scss";

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
        };
    }

    dataTabsSwitching = () => {
        const { currentTab } = this.state;
        const totalTabs = 2; // Количество вкладок

        if (currentTab < totalTabs - 1) {
            this.setState({ currentTab: currentTab + 1 });
        } else {
            // Здесь вы можете использовать navigate для перехода
            this.props.navigate("/feed"); // Переход на страницу Feed
        }
    };

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

    renderTabContent = () => {
        const { currentTab } = this.state;

        switch (currentTab) {
            case 0:
                return (
                    <div data-tab="0" className="popup-tab">
                        <div className="popup-title"><h3>Create your account</h3></div>
                        <div onClick={this.handleInputFocus} className="popup-input">
                            <div className="popup-input__text">
                                <span className='popup-input__text-name'>Name</span>
                                <span className='popup-input__text-symbols'>0/50</span>
                            </div>
                            <input onBlur={this.handleInputBlur} type="text" />
                        </div>
                        <div onClick={this.handleInputFocus} className="popup-input">
                            <div className="popup-input__text">
                                <span className='popup-input__text-name'>Email</span>
                            </div>
                            <input onBlur={this.handleInputBlur} type="text" />
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div data-tab="1" className="popup-tab">
                        <div className="popup-title"><h3>Enter your password</h3></div>
                        <div onClick={this.handleInputFocus} className="popup-input">
                            <div className="popup-input__text">
                                <span className='popup-input__text-name'>Password</span>
                                <span className='popup-input__text-symbols'>0/30</span>
                            </div>
                            <input onBlur={this.handleInputBlur} type="password" />
                        </div>
                        <div onClick={this.handleInputFocus} className="popup-input">
                            <div className="popup-input__text">
                                <span className='popup-input__text-name'>Confirm password</span>
                            </div>
                            <input onBlur={this.handleInputBlur} type="password" />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    render() {
        const { onClose } = this.props;

        return (
            <div className="popup">
                <div onClick={onClose} className="popup-overlay" />
                <div className="popup-content">
                    {this.renderTabContent()}
                    <button onClick={this.dataTabsSwitching} className="popup-next">
                        <span>Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

const PopupWithNavigate = (props) => {
    const navigate = useNavigate();
    return <Popup {...props} navigate={navigate} />;
};

export default PopupWithNavigate;
