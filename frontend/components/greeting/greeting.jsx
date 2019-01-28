import React from 'react';
import {Link} from 'react-router-dom';

// hi dennis 

const Greeting = ({currentUser, logout, location, history}) => {
    if (location.pathname=="/login" || location.pathname=="/signup"){
        return null;
    }
    const sessionLinks = () => (
        <div className="tip_top_logo">
            <div className="all-dem-px"></div>
            <div className="login-signup-adjust">
                <nav className="login-signup">
                    <div className="style-login-signup style-login" ></div>
                    <div className="style-login-signup style-signup"></div>
                </nav>
            </div>
        </div>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <div className="icons-left">
                <div className="header-logo2">
                    <Link to="/users"><i className="fas fa-camera-retro"></i></Link>
                    
                </div>
                <div className="header-pics">
                    <i className="fas fa-images"></i>
                </div>
                <div className="header-dots">
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>


            <div className="header-search">
                <input type="text" placeholder="Search All-Dem-Px..."></input>
            </div>
            <div className="icons-right">
                <div className="header-profile-main">
                    <div className="dropdown">
                        <div className="header-profile">
                            <button className="dropbtn"><i className="fas fa-user-circle"></i></button>
                            <div className="dropdown-content">
                                <button className="profile-button" to="" onClick={() => logout().then(() => history.push("/"))}>Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-plane-main">
                    <div className="header-plane">
                        <i className="fab fa-telegram-plane"></i>
                    </div>
                </div>
                <div className="header-bell-main">
                    <div className="header-bell">
                        <i className="fas fa-bell"></i>
                    </div>
                </div>
                <div className="header-upload-main">
                    <div className="header-upload">
                        <Link to="/photos/:photoId"><i className="fas fa-cloud-upload-alt"></i></Link>
                    </div>
                </div>
            </div>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;