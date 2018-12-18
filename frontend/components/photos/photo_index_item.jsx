import React from 'react';
import {Link} from 'react-router-dom';
import PhotoIndex from './photo_index';

const PhotoIndexItem = props => (
    <div className="photo-index-item">
        <Link to={`api/photos/${props.photo.id}`}>{props.photo.title}</Link>
        <Link to={`api/photos/${props.photo.id}`}>Edit</Link>
        <button onClick={props.deletePhoto(props.photo.id)}>Delete</button>
    </div>
)

export default PhotoIndexItem;