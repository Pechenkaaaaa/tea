const React = require('react');
const TeaItem = require('./TeaItem');

function TeaChat ({comment}) {

    return (
        <div className='chat-container'>
        <div className='chat-tea'>

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