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
        <div className="photo-index-buttonicles">
            <div className="photo-index-edit">
                <Link to={`api/photos/${props.photo.id}`}>Edit</Link>
            </div>
            <br/>
            <div className="photo-index-delete">
                <button onClick={() => props.deletePhoto(props.photo.id)}>Delete</button>
            </div>
        </div>
    </div>
)


export default PhotoIndexItem;