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
        this.update = this.update.bind(this);
    }
    

    navigateToPhotoShow() {
        const url = `${this.props.match.params.photoId}`
        // this.props.history.push(url);
        window.location.reload();
    }

    handleSubmit(e) {
        e.preventDefault();
        const photoId = parseInt(this.props.match.params.photoId);
        const comment = Object.assign({}, this.state, {
            photo_id: photoId
        });
        comment.body = this.state.body;
        this.props.createComment(comment).then(() => this.navigateToPhotoShow());
        // this.navigateToPhotoShow();
    }

    update(e) {
        return this.setState({ body: e.currentTarget.value });
    }

    render() {
        return (
            <div className="comment-form">
                <form className="comment-structure" onSubmit={this.handleSubmit}>
                    <input className="show-comments" type="text" onChange={this.update} placeholder="Add a comment..."></input>
                    <br/>
                    {/* <button onClick={this.navigateToPhotoShow} className="comment-bubble" type="button"><i className="far fa-comment"></i></button> */}
                    <button className="comment-bubble" type="button"><i className="far fa-comment"></i></button>
                </form>
                {/* <button onClick={this.navigateToPhotoShow}>Cancel</button> */}
            </div>
        );
    };

}

export default withRouter(CommentForm);
