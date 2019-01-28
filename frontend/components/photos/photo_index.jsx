import React from 'react';
import PhotoIndexItem from './photo_index_item';
import CreatePhotoFormContainer from './create_photo_form_container';

class PhotoIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPhotos();
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
                    <h1 className="photos-index-title">Recommended Photos</h1>
                    <h3 className="photo-index-description">Based on your preferences</h3>
                    <hr/>
                    <ul className="ul-photos">
                        {photos}
                    </ul>
                    <br/>
                    <CreatePhotoFormContainer/>
                </div>
            </div>
        )
    }
}

export default PhotoIndex;