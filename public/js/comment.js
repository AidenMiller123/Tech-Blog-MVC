const PostId = document.getElementById("postId").textContent;
const UserId = document.getElementById("userId").textContent;

const commentFormHandler = async (event) => {

    let content = document.getElementById('comment').value;
    let user_Id = document.getElementById("userId").textContent
    let post_Id = document.getElementById("postId").textContent

    if (content ) {
        const response = await fetch(`/api/post/${PostId}`, {
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