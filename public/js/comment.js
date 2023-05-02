var PostId = document.getElementById("postId").textContent;
var UserId = document.getElementById("userId").textContent;

const commentFormHandler = async (event) => {

    let content = document.getElementById('comment').value;
    let userId = document.getElementById("userId").textContent
    let id = document.getElementById("postId").textContent

    if (content) {
        const response = await fetch(`/post/${PostId}`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/post/${PostId}`);

        } else {
            alert(response.statusText);
        }
    }

};

document.querySelector('.comment-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        commentFormHandler();
    })