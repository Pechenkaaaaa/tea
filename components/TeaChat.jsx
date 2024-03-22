const React = require('react');

function TeaChat ({comment}) {
    // console.log(comment, "<-----------");
    return (
        <div className='chat-container'>
        <div className='chat-tea'>
        <h3>Комментарии</h3>
        <p>{comment.map((el) => (
            <>
            <div>{el.User.name}</div>
            <div>{el.commentText} </div>
            
            </>
        ))}</p>
        </div>
        </div>
    )
}

module.exports = TeaChat;