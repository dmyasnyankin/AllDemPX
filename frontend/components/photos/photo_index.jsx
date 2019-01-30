import React from 'react';
import PhotoIndexItem from './photo_index_item';
import CreatePhotoFormContainer from './create_photo_form_container';
import {Link} from 'react-router-dom';


class PhotoIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPhotos();
    }

    upload(e) {
        e.preventDefault();
    
        document.getElementById('user-modal').style.display = 'block';
    }
    
    closeModal(e) {
        e.preventDefault();
    
        document.getElementById('user-modal').style.display = 'none';
    
    }

    render(){
        let photos = this.props.photos.map( photo => {
            return (
                <PhotoIndexItem
                    key={photo.id}
                    photo={photo}
                    deletePhoto={this.props.deletePhoto}
                    history={this.props.history}
                />
            )
        })

        return(
            <div className="main-pages">
                <div className="photo-index">
                    <div className="photo-rec">
                        <h1 className="photos-index-title">Recommended Photos</h1>
                        <div className="header-upload-main">
                            <div className="header-upload">
                                <button className='header-upload' onClick={this.upload}><i className="fas fa-cloud-upload-alt"></i></button>
                                {/* <Link to="/photos/:photoId"><i className="fas fa-cloud-upload-alt"></i></Link> */}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <h3 className="photo-index-description">Based on your preferences</h3>
                    <hr/>
                    <ul className="ul-photos">
                        {photos}
                    </ul>
                    <br/>
                </div>
                <div id='user-modal'className="upload-modal">
                    <div className='close-button-wrp'>
                        <button className='close-button' onClick={this.closeModal}>×</button>
                    </div>
                    <div className='form-container'>
                        <CreatePhotoFormContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoIndex;