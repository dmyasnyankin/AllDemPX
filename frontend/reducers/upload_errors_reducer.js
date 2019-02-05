import {RECEIVE_UPLOAD_ERRORS, RECEIVE_PHOTO} from '../actions/photos_actions';

const uploadErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    console.log(action)
    switch (action.type) {
        case RECEIVE_UPLOAD_ERRORS:
            return action.errors;
        case RECEIVE_PHOTO:
            return [];    
        default:
            return state;
    }
};

export default uploadErrorsReducer;