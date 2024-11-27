import "./feed-sidebar.scss"
import {Component, useEffect} from "react";

import dots from './img/dots.svg'
import settings from './img/settings.svg'
import search from './img/search.svg'
import logo from "../feed-header/img/logo.svg";
import {useAuth} from "../../context/authContext";




function FeedSidebar() {
    const {user} = useAuth();

    useEffect(() => {
        console.log("Current user:", user)
    }, [user]);

    return (
        <div className="feed-sidebar">
            <div className="container">
                {user &&
                <div className="account">
                    <div className="account-avatar"><img src={user.avatar} alt={logo}/></div>
                    <div className="account__text">
                        <span className="account__text-name">{user.nickname}</span>
                        <span className="account__text-id">@{user.username}</span>
                    </div>
                    <div className="account-icon"><img src="img/dots.svg" alt=""/></div>
                </div>
                }
            </div>
        </div>
    )
}

export default FeedSidebar;