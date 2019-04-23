import { connect } from 'react-redux';

import { createComment } from '../../actions/photos_actions';
import CommentForm from './comment_form';

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(null, mapDispatchToProps)(CommentForm);