import React from 'react';
import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { fetchPhoto, updatePhoto } from '../../actions/photos_actions';

const mapStateToProps = (state, ownProps) => {
    let photoId = ownProps.match.params.photoId;
    let photo = state.photos[photoId];

    return ({
        photo: photo,
        formType: "Update Photo"
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchPhoto: (id) => dispatch(fetchPhoto(id)),
        action: (photo) => dispatch(updatePhoto(photo))
    })
}

class EditPhotoForm extends React.Component {
    componentDidMount() {
        let photoId = this.props.match.params.photoId;
        this.props.fetchPhoto(photoId);
    }

    render() {
        const { action, formType, photo } = this.props;
        return (
            <PostForm
                action={action}
                formType={formType}
                photo={photo} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPhotoForm);