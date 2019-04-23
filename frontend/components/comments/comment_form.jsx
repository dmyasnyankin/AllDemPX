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
        const url = `/photos/${this.props.match.params.photoId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();
        const photoId = parseInt(this.props.match.params.photoId);
        const comment = Object.assign({}, this.state, {
            comment_id: commentId
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
                <form onSubmit={this.handleSubmit}>
                    <label>Comment</label>
                    <br/>

                    <textarea 
                        cols="30"  
                        rows="10"
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                    <br/>
                    <input type="submit"/>
                </form>
                <button onClick={this.navigateToPhotoShow}>Cancel</button>
            </div>
        );
    }

}