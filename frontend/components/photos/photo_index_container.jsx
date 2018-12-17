import {connect} from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos, deletePhoto } from '../../actions/photos_actions';

const mapStateToProps = state => {
    let photos = Object.values(state.photos);
    
    return ({
        photos: photos
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPhotos: () => dispatch(fetchPhotos()),
        deletePhoto: (id) => dispatch(deletePhoto(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);