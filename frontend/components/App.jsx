import GreetingContainer from './greeting/greeting_container';
import {Route, Switch} from 'react-router-dom';
import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import PrettyFrontPage from './pretty_front_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoShowContainer from './photos/photo_show_container';
//switch router doesnt work when i wrap my auth routes in it 


const App = () => (
    <Switch>
    <div className="app-style">
        <header>
            <GreetingContainer />
            {/* <h1 className="logo"></h1> */}
        </header>
        
        {/* <div className="splash"> */}
            <Route exact path="/" component={PrettyFrontPage} />
        {/* </div> */}
        {/* <div className="main-pages"> */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/users" component={PhotoIndexContainer} />
            <Route path="/photos/:photoId" component={PhotoShowContainer}/>
        {/* </div> */}
    </div>
    </Switch>
    
)

export default App;