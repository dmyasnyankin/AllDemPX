import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom';
import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import PrettyFrontPage from './pretty_front_page';

const App = () => (
    <div>
        <header>
            <GreetingContainer />
            <h1 className="logo">All Dem PX</h1>
        </header>
        <body>
        </body>
        <Route exact path="/" component={PrettyFrontPage} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;