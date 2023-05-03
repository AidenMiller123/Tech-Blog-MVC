const PostId = document.getElementById("updatePostId").textContent;

const updateFormHandler = async (event) => {

    let title = document.getElementById('update-title').value
    let content = document.getElementById('updateContent').value;

    if (title && content) {
        const response = await fetch(`/api/dashboard/updatePost/${PostId}`, {
            method: 'PUT',
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

document.querySelector('.update-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        updateFormHandler();
    })