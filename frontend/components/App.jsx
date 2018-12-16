import GreetingContainer from './greeting/greeting_container';
import {Route, Switch} from 'react-router-dom';
import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import PrettyFrontPage from './pretty_front_page';
import { AuthRoute } from '../util/route_util';

//switch router doesnt work when i wrap my auth routes in it 


const App = () => (
    <div className="app-style">
        <header>
            <GreetingContainer />
            <h1 className="logo"></h1>
        </header>
        <body>
        </body>
        
        <div className="splash">
            <Route exact path="/" component={PrettyFrontPage} />
        </div>
        <div className="main-pages">
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    </div>
)

export default App;