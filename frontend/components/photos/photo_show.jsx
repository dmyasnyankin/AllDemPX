import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div className="show-picture-frame">
                        <img className="show-picture" src={this.props.photo.imageUrl} />
                    </div>
                    <div className="show-index-btn"><Link to="/users">Go Back to Previous Page</Link></div>
                </div>
            </div>
        );
    }
}

export default PhotoShow;