import { connect } from 'react-redux';

import { createComment } from '../../actions/photos_actions';
import CommentForm from './comment_form';

// const mapStateToProps = state => {
//     let comments = Object.values(state.entities.photos.comments);
    
//     return ({
//         comments: comments
//     });
// };

const mapDispatchToProps = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
});

export default connect(null, mapDispatchToProps)(CommentForm);