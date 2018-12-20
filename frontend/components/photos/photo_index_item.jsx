import React from 'react';
import {Link} from 'react-router-dom';


const PhotoIndexItem = props => (
    <div className="photo-index-item">
        <div className="photo-index-picture">
            <img src={props.photo.imageUrl}/>
        </div>
        <br/>
        <div className="photo-index-picture-title">
            <Link to={`api/photos/${props.photo.id}`}>{props.photo.title}</Link>
        </div>
        <br/>
        <Link to={`api/photos/${props.photo.id}`}>Edit</Link>
        <br/>
        <button onClick={() => props.deletePhoto(props.photo.id)}>Delete</button>
    </div>
)


export default PhotoIndexItem;