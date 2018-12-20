
import * as PhotosAPIUtil from '../util/photos_api_util'

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

const receivePhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS,
    photos: photos
});

const receivePhoto = ({photo}) => ({
    type: RECEIVE_PHOTO,
    photo
});

const removePhoto = (photo) => ({
    type: REMOVE_PHOTO,
    photoId: photo.id
});

export const fetchPhotos = () => dispatch => (
    PhotosAPIUtil.fetchPhotos().then( photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = (id) => dispatch => (
    PhotosAPIUtil.fetchPhoto(id).then( photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = (photo) => dispatch => {
    return (
        PhotosAPIUtil.createPhoto(photo).then( photo => dispatch(receivePhoto(photo)))
    )
};

export const updatePhoto = (photo) => dispatch => (
    PhotosAPIUtil.updatePhoto(photo).then( photo => dispatch(receivePhoto(photo)))
);

export const deletePhoto = (id) => dispatch => (
    PhotosAPIUtil.deletePhoto(id).then( photo => dispatch(removePhoto(photo)))
);