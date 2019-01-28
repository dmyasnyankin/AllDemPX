import {connect} from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos, deletePhoto } from '../../actions/photos_actions';
import {withRouter} from "react-router-dom";


const mapStateToProps = state => {
    let photos = Object.values(state.entities.photos);
    
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoIndex));