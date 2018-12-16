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
            <h2 className="header-name">Howyadoin, {currentUser.email}?</h2>
            <button className="header-button" to="" onClick={() => logout().then(() => history.push("/"))}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;