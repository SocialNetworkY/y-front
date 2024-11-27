import "./feed-sidebar.scss"
import {Component, useEffect} from "react";

import dots from './img/dots.svg'
import settings from './img/settings.svg'
import search from './img/search.svg'
import logo from "../feed-header/img/logo.svg";
import {useAuth} from "../../context/authContext";
import {useNavigate} from "react-router-dom";




function FeedSidebar() {
    const {user} = useAuth();

    useEffect(() => {
        console.log("Current user:", user)
    }, [user]);

    return (
        <div className="feed-sidebar">
            <div className="container">
                {user &&
                <a className="account" href={`/users/${user.id}`}>
                    <div className="account-avatar"><img src={user.avatar} alt={logo}/></div>
                    <div className="account__text">
                        <span className="account__text-name">{user.nickname}</span>
                        <span className="account__text-id">@{user.username}</span>
                    </div>
                </a>
                }
            </div>
        </div>
    )
}

export default FeedSidebar;