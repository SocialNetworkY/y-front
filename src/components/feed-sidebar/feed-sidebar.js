import "./feed-sidebar.scss"
import {Component} from "react";


import dots from './img/dots.svg'
import settings from './img/settings.svg'
import search from './img/search.svg'
import logo from "../feed-header/img/logo.svg";




class feedSidebar extends Component {


    render() {
        return (
            <div className="feed-sidebar">
                <div className="container">
                    <div className="account">
                        <div className="account-avatar"><img src={logo} alt=""/></div>
                        <div className="account__text">
                            <span className="account__text-name">Bradley Ortiz</span>
                            <span className="account__text-id">@bradley_</span>
                        </div>
                        <div className="account-icon"><img src="img/dots.svg" alt=""/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default feedSidebar;