import React from 'react';
import {Link} from 'react-router-dom';

const PhotoIndexItem = props => {
    
    return (
    <div className="photo-index-item">
        <div className="photo-index-picture">
            <Link to={`/photos/${props.photo.id}`}><img src={props.photo.imageUrl}/></Link>
        </div>
        <br/>
        {/* <div className="photo-index-picture-title">
            <Link to={`/photos/${props.photo.id}`}>{props.photo.title}</Link>
        </div> */}
        <br/>
        <div className="photo-index-buttonicles">
            {/* <div className="photo-index-edit">
                <Link to={`/photos/${props.photo.id}`}>Edit</Link>
            </div>
            <br/> */}
            <div className="photo-index-delete">
                <button className="photo-index-delete-frame" onClick={() => props.deletePhoto(props.photo.id).then(() => props.history.go(0))}><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
    </div>
)}


export default PhotoIndexItem;