import "./feed-header.scss"

const feedHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <nav className="nav">
                        <ul>
                            <li><a href="/"><img src="img/logo.svg" alt=""/></a></li>
                            <li><a href="/"><img src="img/nav-home.svg" alt=""/><span>Home</span></a></li>
                            <li><a href="/"><img src="img/nav-profile.svg" alt=""/><span>Profile</span></a></li>
                            <li><a href="/"><img src="img/nav-profile.svg" alt=""/><span>Reports</span></a></li>
                            <li><a href="/"><img src="img/nav-profile.svg" alt=""/><span>Admin Panel</span></a></li>
                        </ul>
                    </nav>
                    <button className="btn"><span>Yeet</span></button>
                    <div className="account">
                        <div className="account-avatar"><img src="img/avatar.png" alt=""/></div>
                        <div className="account__text">
                            <span className="account__text-name">Bradley Ortiz</span>
                            <span className="account__text-id">@bradley_</span>
                        </div>
                        <div className="account-icon"><img src="img/dots.svg" alt=""/></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default feedHeader;