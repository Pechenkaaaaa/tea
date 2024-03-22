const React = require('react');

function TeaItem ({comment}) {
    console.log(comment.User.name);

    return (
        
            <>
            <div className='comment-name'>{comment.User.name}</div>
            <div className='comment-text'>{comment.commentText} </div>
            </>

    )
}

module.exports = TeaItem;