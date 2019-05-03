import React from 'react';
import CommentIndexItem from "./comment_index_item";
// import CommentIndexContainer from "./comment_index_container";

class CommentIndex extends React.Component {
    componentDidMount(){
        this.props.fetchComments();
    }

    render(){
        let comments = this.props.comments.map( comment => {
            return (
                <CommentIndexItem
                    key={comment.id}
                    comment={comment}
                />
            )
        })

        return(
            <div>
                <ul className='ul-comments'>
                    {comments}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;