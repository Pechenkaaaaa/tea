const React = require('react');

function FormAddComment ({tea}) {

    return (
        <div className='form-comment-container' >

            <form className='form-add-comment' data-teaid={tea.id}>
                <input type="text" name='commentText' placeholder='Введите комментарий'/>
                <button type='submit'>Отправить комментарий</button>
            </form>

        </div>
    )
}

module.exports = FormAddComment;