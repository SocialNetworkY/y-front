import { Link } from "react-router-dom";

import "./feed-header.scss";
import navHome from "./img/nav-home.svg";
import navProfile from "./img/user.svg";
import logo from "../../img/logo.svg";


const FeedHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <nav className="nav">
                        <ul>
                            <li><Link to="/feed"><img src={logo} alt=""/></Link></li>
                            <li><Link to="/feed"><img src={navHome} alt=""/><span>Home</span></Link></li>
                            <li><Link to="/profile"><img src={navProfile} alt=""/><span>Profile</span></Link></li>
                        </ul>
                    </nav>
                    <button className="btn"><span>Yeet</span></button>
                </div>
            </div>
        </header>
    );
};

export default FeedHeader;


