import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { createPhoto } from '../../actions/photos_actions';

const mapStateToProps = ({errors}) => {
    return ({
        errors: errors.upload,
        photo: { title: "", image_url: "" },
        formType: "Upload Photo"
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        action: (photo) => dispatch(createPhoto(photo))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);