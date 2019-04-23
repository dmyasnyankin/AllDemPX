import React from 'react';
import { connect } from 'react-redux';

const Comment = ({ comment, author }) => {
  const { body } = comment;
  return (
    <div>
      <ul>
        <li>{body} - by {author.username}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({entities: { users }}, { comment }) => {
  return {
    author: users[comment.author_id]
  };
};

export default connect(mapStateToProps)(Comment);