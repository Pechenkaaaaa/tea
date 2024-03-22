const formAddComment = document.querySelector('.form-add-comment');
const chatContainer = document.querySelector('.chat-tea');

//POST
if (formAddComment) {
    formAddComment.addEventListener('submit', async (e) =>{
        e.preventDefault();

        const {teaid} = e.target.dataset;
        console.log(teaid);
        const {commentText} = e.target;
        const data = {commentText: commentText.value};

        //fetch
        const response = await fetch(`/api/tea/${teaid}`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data),
        });

        const res = await response.json();
        if (res.message === 'success') {
            chatContainer.insertAdjacentHTML('beforeend', res.html);
            formAddComment.reset();
        }
    })
}