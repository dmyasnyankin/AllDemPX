import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {

    return {
        errors: errors.session,
        formType: 'Signup',
        navLink: <p className="session-footer">    
                    <p>By Signing up you agree to our Terms and Conditions.</p>
                    <p>Already a member? <Link className="session-footer-link" to="/login">Login!</Link></p>
                </p>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);