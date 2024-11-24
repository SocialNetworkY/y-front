import "./feed-header.scss"


import navHome from "./img/nav-home.svg"
import navProfile from "./img/user.svg"
import logo from "../../img/logo.svg";
import admin from "./img/nav-administrator.svg"
import report from "./img/nav-report.svg"

const feedHeader = ({toggleView}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <nav className="nav">
                        <ul>
                            <li><a href="/"><img src={logo} alt=""/></a></li>
                            <li><a href="/"><img src={navHome} alt=""/><span>Home</span></a></li>
                            <li onClick={toggleView}><a href="/"><img src={navProfile} alt=""/><span>Profile</span></a></li>
                            <li><a href="/"><img src={report} alt=""/><span>Reports</span></a></li>
                            <li><a href="/"><img src={admin} alt=""/><span>Admin Panel</span></a></li>
                        </ul>
                    </nav>
                    <button className="btn"><span>Yeet</span></button>
                </div>
            </div>
        </header>
    )
}

export default feedHeader;