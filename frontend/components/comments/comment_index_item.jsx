import React from 'react';
import { connect } from 'react-redux';

const Comment = ({ comment }) => {
  const { body } = comment;
  return (
    <div>
      <ul>
        <li>{body} - by Anonymous Photo Enthusiast</li>

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