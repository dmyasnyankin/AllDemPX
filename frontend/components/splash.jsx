
const Greeting = () => (
    <div className="tip_top_logo">
        <div className="all-dem-px">
            <img src={window.images.logo} alt="" />
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

const PrettyFrontPage = () => {
    return (
        <div>
            <h1 className="main-welcome">Experience and be the lens of inspiration and all that doohickey</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="main-welcome-description">Your home away from home</h3>
            <br />
            <Link to="/signup">
                <div className="pretty-front-page-button">
                    <p>Join All Dem PX</p>
                </div>
            </Link>
        </div>
    )

}

export default PrettyFrontPage;
export default Greeting;