import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto } from '../../actions/photos_actions';
import { selectCommentsForPhoto, selectPhoto } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
    let photoId = ownProps.match.params.photoId;
    const photo = selectPhoto(state.entities, benchId);
    const comments = selectCommentsForPhoto(state.entities, photo);
    return ({
        photo: state.entities.photos[photoId],
        photoId: state.entities.photos.photoId,
        comments
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchPhoto: (id) => dispatch(fetchPhoto(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);