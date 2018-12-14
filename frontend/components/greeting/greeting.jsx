import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <div className="tip_top_logo">

            <nav className="login-signup">
                <div className="style-login-signup style-login" >
                    <Link to="/login">Login</Link>
                </div>
                <div className="style-login-signup style-signup">
                    <Link to="/signup">Sign up!</Link>
                </div>
            </nav>
            
        </div>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Howyadoin, {currentUser.username}?</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;