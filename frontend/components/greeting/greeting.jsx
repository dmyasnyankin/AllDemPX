import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout, location, history}) => {
    if (location.pathname=="/login" || location.pathname=="/signup"){
        return null;
    }
    const sessionLinks = () => (
        <div className="tip_top_logo">
            <div className="all-dem-px">
                <img src={window.images.logo} alt=""/>
            </div>
            <div className="login-signup-adjust">
                <nav className="login-signup">
                    <div className="style-login-signup style-login" >
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="style-login-signup style-signup">
                        <Link to="/signup">Sign up!</Link>
                    </div>
                </nav>
            </div>
        </div>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <div className="icons-left">
                <div className="header-logo2">
                    <img src={"assets/500px_logo_dark_large.png"}/>
                </div>
                <div className="header-pics">
                    <img src={"assets/image_logo.png"}/>
                </div>
                <div className="header-dots">
                    <img src={"assets/dots_logo.svg"}/>
                </div>
            </div>


            <div className="header-search">
                <input type="text" placeholder="Search.."></input>
            </div>
            <div className="icons-right">
                <div className="header-profile-main">
                    <div className="dropdown">
                        <div className="header-profile">
                            <button className="dropbtn"><img src={"assets/avatar_logo.png"} /></button>
                            <div className="dropdown-content">
                                <button className="profile-button" to="" onClick={() => logout().then(() => history.push("/"))}>Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-plane-main">
                    <div className="header-plane">
                        <img src={"assets/the_plane.svg"}/>
                    </div>
                </div>
                <div className="header-bell-main">
                    <div className="header-bell">
                        <img src={"assets/the_bell.svg"}/>
                    </div>
                </div>
                <div className="header-upload-main">
                    <div className="header-upload">
                        <Link to="api/photos"><img src={"assets/upload_logo.png"} /></Link>
                    </div>
                </div>
                <button className="header-button" to="" onClick={() => logout().then(() => history.push("/"))}>Log Out</button>
            </div>

        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;