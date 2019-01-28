import React from 'react';
import { Link } from 'react-router-dom';

const PrettyFrontPage = () => {
    return (
        // <div>
        //     <h1 className="main-welcome">Experience and be the lens of inspiration, sharing it with the world</h1>
        //         <br/>
        //         <br/>
        //         <br/>
        //         <br/>
        //         <br/>
        //         <br/>
        //         <br/>
        //         <br/>
        //     <h3 className="e">Your home away from home</h3>
        //     <br/>
        //     <Link to="/signup">
        //         <div className="pretty-front-page-button">
        //         <p>Join PXtures</p>
        //         </div>
        //     </Link>
        // </div>

        <div className="splash-page">
            <div className="splash-page-image">
                <img src="" alt=""/>
            </div>
            <div className="splash-top-bar">
                <div className="splash-nav-left">
                    <Link to="">
                        <button className="splash-nav-logo" >PXtures</button>
                    </Link>
                    <a href={"https://www.linkedin.com/in/dennis-myasnyankin/"}>
                        <button className="splash-nav-discover">Discover</button>
                    </a>
                    <a href={"https://github.com/dmyasnyankin/AllDemPX"}>
                        <button className="splash-nav-about">About</button>
                    </a>
                </div>
                <div className="splash-nav-right">
                    <Link to="/login">
                        <button className="splash-nav-login">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="splash-nav-signup">Sign Up</button>
                    </Link>
                </div>
            </div>
            <h1 className="splash-main-quote">Experience and be the lens of inspiration, sharing it with the world</h1>
            <h2 className="splash-quote-des">Your home away from home</h2>
            <Link className="splash-link" to="/signup">
                <button className="splash-button">Join Now!</button>
            </Link>
            <h1></h1>
        </div>
    )

}

export default PrettyFrontPage;