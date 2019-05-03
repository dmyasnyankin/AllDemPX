import {connect} from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/photos_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => {
    let comments = Object.values(state.entities.comments);

    return ({
        comments: comments
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchComments: () => dispatch(fetchComments())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));