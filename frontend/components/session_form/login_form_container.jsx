import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {

    return {
        errors: errors.session,
        formType: 'Login to PXtures',
        navLink: <p className="session-footer">Don't have an account? <Link className="session-footer-link" to="/signup">Sign up!</Link></p>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);