import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToPhotoShow = this.navigateToPhotoShow.bind(this);
    }
    

    navigateToPhotoShow() {
        const url = `photos/${this.props.match.params.photoId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();
        const photoId = parseInt(this.props.match.params.photoId);
        const comment = Object.assign({}, this.state, {
            photo_id: photoId
        });
        this.props.createComment(comment);
        this.navigateToPhotoShow();
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {
        return (
            <div className="comment-form">
                <form className="comment-structure" onSubmit={this.handleSubmit}>
                    <input className="show-comments" type="text" placeholder="Add a comment..."></input>
                    <br/>
                    <button onClick={this.navigateToPhotoShow} className="comment-bubble" type="submit"><i className="far fa-comment"></i></button>
                </form>
                {/* <button onClick={this.navigateToPhotoShow}>Cancel</button> */}
            </div>
        );
    };

}

export default withRouter(CommentForm);
