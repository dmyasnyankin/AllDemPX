import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';


class PhotoShow extends React.Component {
    componentDidMount() {
        let photoId = this.props.match.params.photoId;
        this.props.fetchPhoto(photoId)
    }

    render() {

        
        if (this.props.photo === undefined){
            return (
                <div></div>
                )
            }
        return (
            <div className="show-page-content">
                <div className="show-page">
                    <h2 className="show-title">{this.props.photo.title}</h2>
                        <div className="show-pic-wrp">
                            <div className="show-picture-frame">
                                <img className="show-picture" src={this.props.photo.imageUrl} />
                            </div>
                        </div>
                        <div className="comments-wrapper">
                                <h1 className="comments-title">Comments</h1>
                                <div className="show-features">
                                    <div >
                                        <CommentFormContainer/>
                                    </div>
                                    <div className="show-likes"><i className="fas fa-heart"></i></div>
                                </div>
                                <br/>
                                <div className="comments-list" onLoad={window.location.reload}>
                                        <CommentIndexContainer />
                                </div>
                        </div>
                    <div className="show-index-btn"><Link to="/users">Go Back to Previous Page</Link></div>
                </div>
            </div>
        );
    }
}

export default PhotoShow;