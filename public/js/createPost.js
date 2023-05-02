const postFormHandler = async (event) => {

    let title = document.getElementById('post-title').value
    let content = document.getElementById('postContent').value;
    let user_id = document.getElementById("userId").textContent

    if (title && content && user_id) {
        const response = await fetch(`/dashboard/createPost`, {
            method: 'POST',
            body: JSON.stringify({ title, content, user_id}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/dashboard`);

        } else {
            alert(response.statusText);
        }
    }

};

document.querySelector('.post-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        postFormHandler();
    })