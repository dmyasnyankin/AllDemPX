import merge from 'lodash/merge';

import {
  RECEIVE_PHOTO,
  RECEIVE_COMMENT,
} from '../actions/photos_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      const { comment } = action;
      return merge({}, state, { [comment.id]: comment });
    default:
      return state;
  }
}

export default commentsReducer;