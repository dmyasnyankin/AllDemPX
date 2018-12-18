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
                />
            )
        })

        return(
            <div className="photo-index">
                <h2>Recommended Photos For You:</h2>
                <br/>
                <ul>
                    {photos}
                </ul>
                <br/>
                <CreatePhotoFormContainer/>
            </div>
        )
    }
}

export default PhotoIndex;