
import * as PhotosAPIUtil from '../util/photos_api_util'

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

//ADDED
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_UPLOAD_ERRORS = 'RECEIVE_UPLOAD_ERRORS';
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";


const receivePhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS,
    photos: photos
});

const receivePhoto = ({photo, comments, authors}) => ({
    type: RECEIVE_PHOTO,
    photo,
    comments,
    authors
});

const removePhoto = (photo) => ({
    type: REMOVE_PHOTO,
    photoId: photo.id
});

const receiveErrors = errors => ({
    type: RECEIVE_UPLOAD_ERRORS,
    errors
});

// ADDED
const receiveComment = ({ comment, author }) => ({
    type: RECEIVE_COMMENT,
    comment,
    author
});

const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments: comments
})

export const fetchPhotos = () => dispatch => (
    PhotosAPIUtil.fetchPhotos().then( photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = (id) => dispatch => (
    PhotosAPIUtil.fetchPhoto(id).then( photo => dispatch(receivePhoto(photo)))
);

// export const createPhoto = (photo) => dispatch => {
//     return (
//         PhotosAPIUtil.createPhoto(photo).then( 
//             photo => dispatch(receivePhoto(photo))),
//             err => (dispatch(receiveErrors(err.responseJSON)))
//     )
// };
export const createPhoto = (photo) => dispatch => (
    PhotosAPIUtil.createPhoto(photo).then( 
        photo => dispatch(receivePhoto(photo)),
        err => (dispatch(receiveErrors(err.responseJSON))))
);

export const updatePhoto = (photo) => dispatch => (
    PhotosAPIUtil.updatePhoto(photo).then( photo => dispatch(receivePhoto(photo)))
);

export const deletePhoto = (id) => dispatch => (
    PhotosAPIUtil.deletePhoto(id).then( photo => dispatch(removePhoto(photo)))
);

//ADDED
export const createComment = (comment) => dispatch => (
    PhotosAPIUtil.createComment(comment).then(
        comment => {
            console.log(comment)
            dispatch(receiveComment(comment))
    })
);

export const fetchComments = () => dispatch => (
    PhotosAPIUtil.fetchComments().then( comments => dispatch(receiveComments(comments)))
);


// export const signup = user => dispatch => (
//     APIUtil.signup(user).then(
//         user => (dispatch(receiveCurrentUser(user))),
//         err => (dispatch(receiveErrors(err.responseJSON)))
//     )
// );