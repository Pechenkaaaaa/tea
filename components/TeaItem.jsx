const React = require('react');

function TeaItem ({comment}) {
    console.log(comment.User.name);

    return (
   
        
            <>
            <div>{comment.User.name}</div>
            <div>{comment.commentText} </div>
            </>
  

    )
}

module.exports = TeaItem;