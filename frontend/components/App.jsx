import GreetingContainer from './greeting/greeting_container';
import {Route} from 'react-router-dom';
import React from 'react';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>All Dem PX</h1>
            <GreetingContainer />
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;