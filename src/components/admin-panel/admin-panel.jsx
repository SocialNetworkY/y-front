import {useEffect, useState} from 'react';
import './admin-panel.scss';

import navHomeIcon from './img/nav-home.svg';
import navReportIcon from './img/nav-report.svg';
import navSettingsIcon from './img/nav-settings.svg';
import backgroundGradientImg from './img/background-gradient.png';
import notificationIcon from './img/notification.svg';
import logo from "../../img/logo.svg";

import AdminPanelOverview from "../admin-panel-overview/admin-panel-overview";
import AdminReportsReview from "../admin-panel-reports/admin-panel-reports";
import AdminPanelSettings from "../admin-panel-settings/admin-panel-settings";
import AdminUsersReview from "../admin-panel-users/admin-panel-users";

export default function AdminPanel() {
    const [content, setContent] = useState(<AdminPanelOverview />);
    const [title, setTitle] = useState("Dashboard Overview");
    const [activeTab, setActiveTab] = useState("overview");
    const [isDarkMode, setIsDarkMode] = useState(false);


    const handleMenuClick = (tab, component, newTitle) => {
        setContent(component);
        setTitle(newTitle);
        setActiveTab(tab);
    };


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'admin-dark' : 'admin-light');
    };

    return (
        <div className='admin'>
            <div className="container admin-container">
                <div className="admin-wrapper">
                    <nav className="admin-nav">
                        <a href='/' className="logo"><img src={logo} alt=""/></a>
                        <div className="admin-nav__group">
                            <ul>
                                <li className='admin-nav__text'><span>MENU</span></li>
                                <li>
                                    <button
                                        className={`admin-nav__btn ${activeTab === 'overview' ? 'active' : ''}`}
                                        onClick={() => handleMenuClick('overview', <AdminPanelOverview
                                            setTitle={setTitle}/>, "Dashboard Overview")}
                                    >
                                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.07954 3.08339L3.47668 6.67004C2.70811 7.26781 2.08472 8.54021 2.08472 9.50519V15.8331C2.08472 17.8143 3.69871 19.4368 5.6799 19.4368H15.5688C17.55 19.4368 19.164 17.8143 19.164 15.8416V9.62475C19.164 8.59145 18.4723 7.26781 17.6268 6.67858L12.3494 2.98092C11.1538 2.14403 9.23239 2.18673 8.07954 3.08339Z"
                                                stroke="black" stroke-width="1.53713" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <path d="M10.6244 16.0209V13.459" stroke="black" stroke-width="1.53713"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <span>Overview</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`admin-nav__btn ${activeTab === 'reports' ? 'active' : ''}`}
                                        onClick={() => handleMenuClick('reports', <AdminReportsReview
                                            setTitle={setTitle}/>, "Reports Overview")}
                                    >
                                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.1641 5.73302V7.79961C19.1641 9.14887 18.3101 10.0028 16.9608 10.0028H14.0403V4.03363C14.0403 3.08574 14.8174 2.31717 15.7653 2.31717C16.6961 2.32571 17.5501 2.70145 18.1649 3.31631C18.7798 3.9397 19.1641 4.79366 19.1641 5.73302Z"
                                                stroke="#898989" stroke-width="1.02476" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                            <path
                                                d="M2.08472 6.58698V18.5425C2.08472 19.2513 2.88742 19.6526 3.45104 19.2256L4.91133 18.1326C5.25292 17.8764 5.73114 17.9105 6.03857 18.218L7.45612 19.6441C7.78917 19.9771 8.33574 19.9771 8.66879 19.6441L10.1034 18.2094C10.4023 17.9105 10.8805 17.8764 11.2136 18.1326L12.6739 19.2256C13.2375 19.6441 14.0402 19.2427 14.0402 18.5425V4.0251C14.0402 3.08574 14.8088 2.31717 15.7481 2.31717H6.35453H5.50057C2.93868 2.31717 2.08472 3.84576 2.08472 5.73302V6.58698Z"
                                                stroke="#898989" stroke-width="1.02476" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M5.50061 8.29492H10.6244" stroke="#898989" stroke-width="1.02476"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6.14111 11.7108H9.98395" stroke="#898989" stroke-width="1.02476"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <span>Reports</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`admin-nav__btn ${activeTab === 'users' ? 'active' : ''}`}
                                        onClick={() => handleMenuClick('users', <AdminUsersReview
                                            setTitle={setTitle}/>, "Dashboard Users")}
                                    >
                                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.07954 3.08339L3.47668 6.67004C2.70811 7.26781 2.08472 8.54021 2.08472 9.50519V15.8331C2.08472 17.8143 3.69871 19.4368 5.6799 19.4368H15.5688C17.55 19.4368 19.164 17.8143 19.164 15.8416V9.62475C19.164 8.59145 18.4723 7.26781 17.6268 6.67858L12.3494 2.98092C11.1538 2.14403 9.23239 2.18673 8.07954 3.08339Z"
                                                stroke="black" stroke-width="1.53713" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <path d="M10.6244 16.0209V13.459" stroke="black" stroke-width="1.53713"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <span>Overview</span>
                                    </button>
                                </li>
                                <li className='admin-nav__text'><span>OTHERS</span></li>
                                <li>
                                    <button
                                        className={`admin-nav__btn ${activeTab === 'settings' ? 'active' : ''}`}
                                        onClick={() => handleMenuClick('settings', <AdminPanelSettings
                                            setTitle={setTitle} toggleTheme={toggleTheme}/>, "Settings")}
                                    >
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.6244 13.1624C12.0393 13.1624 13.1863 12.0154 13.1863 10.6005C13.1863 9.1856 12.0393 8.0386 10.6244 8.0386C9.2095 8.0386 8.0625 9.1856 8.0625 10.6005C8.0625 12.0154 9.2095 13.1624 10.6244 13.1624Z"
                                                stroke="#898989" stroke-width="1.02476" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                            <path
                                                d="M2.08472 11.352V9.84899C2.08472 8.96087 2.81059 8.22646 3.70725 8.22646C5.25292 8.22646 5.88485 7.13339 5.10775 5.79267C4.66368 5.0241 4.92841 4.02497 5.70552 3.58091L7.18288 2.73548C7.85751 2.33412 8.72855 2.57323 9.12991 3.24786L9.22385 3.41011C9.99241 4.75083 11.2563 4.75083 12.0334 3.41011L12.1273 3.24786C12.5287 2.57323 13.3997 2.33412 14.0744 2.73548L15.5517 3.58091C16.3288 4.02497 16.5935 5.0241 16.1495 5.79267C15.3724 7.13339 16.0043 8.22646 17.55 8.22646C18.4381 8.22646 19.1725 8.95233 19.1725 9.84899V11.352C19.1725 12.2401 18.4466 12.9745 17.55 12.9745C16.0043 12.9745 15.3724 14.0676 16.1495 15.4083C16.5935 16.1854 16.3288 17.176 15.5517 17.6201L14.0744 18.4655C13.3997 18.8668 12.5287 18.6277 12.1273 17.9531L12.0334 17.7908C11.2648 16.4501 10.001 16.4501 9.22385 17.7908L9.12991 17.9531C8.72855 18.6277 7.85751 18.8668 7.18288 18.4655L5.70552 17.6201C4.92841 17.176 4.66368 16.1769 5.10775 15.4083C5.88485 14.0676 5.25292 12.9745 3.70725 12.9745C2.81059 12.9745 2.08472 12.2401 2.08472 11.352Z"
                                                stroke="#898989" stroke-width="1.02476" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <span>Settings</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Content title={title}>
                        {content}
                    </Content>
                </div>
            </div>
        </div>
    );
}

function Content({children, title}) {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="admin-main">
            <div className="admin-main__background">
                <img src={backgroundGradientImg} alt=""/>
            </div>
            <div className="admin-title">
                <div className="title-h2"><h2>{title}</h2></div>
                <div className={`admin-notifications ${isOpen ? 'show' : ''}`}>
                    <div
                        onClick={handleClick}
                        className="admin-notifications__btn">
                        <img src={notificationIcon} alt=""/>
                    </div>
                    <div className="admin-notifications__list">
                        <ul>
                            <li>
                                <span>Name</span>
                                <p>Description</p>
                            </li>
                            <li>
                                <span>Name</span>
                                <p>Description</p>
                            </li>
                            <li>
                                <span>Name</span>
                                <p>Description</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {children && children}
        </div>
    );
}
