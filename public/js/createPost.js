const postFormHandler = async (event) => {

    let title = document.getElementById('post-title').value
    let content = document.getElementById('postContent').value;
    let user_id = document.getElementById("userId").textContent

    if (title && content) {
        const response = await fetch(`/api/dashboard/createPost`, {
            method: 'POST',
            body: JSON.stringify({ title, content}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/`);

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