import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({ session, entities: {users} }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));