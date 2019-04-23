import React from 'react';
import { Link } from 'react-router';

import CommentListItemContainer from './comment_list_item_container';

const commentList = (comments) => (
  comments.map(comment => (
    <CommentListItemContainer
      comment={comment}
      key={comment.id}
    />
  ))
);

const CommentsDetail = ({ comments }) => {
  return (
    <div>
      <br/>
      <div className="comments">
        <h3>Comments</h3>
            {commentList(comments)}
      </div>
    </div>
  );
};

export default CommentsDetail;