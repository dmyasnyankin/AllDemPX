import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
    componentDidMount() {
        let photoId = this.props.match.params.photoId;
        this.props.fetchPost(photoId)
    }

    render() {
        return (
            <div>
                <h2>{this.props.photo.title}</h2>
                <div>{this.props.photo.image_url}</div>
                <Link to="api/photos">Photo Index</Link>
            </div>
        );
    }
}

export default PhotoShow;