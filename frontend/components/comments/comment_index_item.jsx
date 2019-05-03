import React from 'react';
import { connect } from 'react-redux';

const Comment = ({ comment }) => {
  const { body } = comment;
  return (
    <div>
      <ul>

        <li className="comment-li">
          <p className="comment-body">{body}</p>
          <p className="comment-user-add-on">Anonymous Photo Enthusiast</p>
        </li>

      </ul>
    </div>
  );
};

// const mapStateToProps = ({entities: { users }}, { comment }) => {
//   return {
//     author: users[comment.author_id]
//   };
// };

export default (Comment);