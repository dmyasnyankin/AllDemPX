import React from 'react';
import { Link } from 'react-router-dom';

const PrettyFrontPage = () => {
    return (
        <div>
            <h1 className="main-welcome">Experience and be the lens of inspiration, sharing it with the world</h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <h3 className="main-welcome-description">Your home away from home</h3>
            <br/>
            <Link to="/signup">
                <div className="pretty-front-page-button">
                <p>Join PXtures</p>
                </div>
            </Link>
        </div>
    )

}

export default PrettyFrontPage;