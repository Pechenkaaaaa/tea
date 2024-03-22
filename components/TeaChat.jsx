const React = require('react');
const TeaItem = require('./TeaItem');

function TeaChat ({comment}) {

    return (
        <div className='chat-container'>
        <div className='chat-tea'>
        <h3>Комментарии</h3>
        <p>{comment.map((el) => (
            <>
          <TeaItem comment={el}/>
            
            </>
        ))}</p>
        </div>
        </div>
    )
}

module.exports = TeaChat;