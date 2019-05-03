import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_COMMENTS } from "../actions/photos_actions";
import merge from "lodash/merge";

const PhotosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            newState = merge({}, oldState, {[action.photo.id]: action.photo});
            return newState;
        case REMOVE_PHOTO:
            newState = merge({}, oldState);
            delete newState[action.photoId];
            return newState;
        case RECEIVE_COMMENTS:
            return action.comments;
            // const { comment } = action;
            // newState = merge({}, oldState);
            // newState[comment.photoId].commentIds.push(comment.id);
            // return newState;
        default:
            return oldState;
    }
};

export default PhotosReducer;