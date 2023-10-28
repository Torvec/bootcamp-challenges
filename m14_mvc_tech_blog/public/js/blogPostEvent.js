// EVENT LISTENERS FOR EDITING AND DELETING BLOG POSTS


// Event listener for editing a blog post
document.addEventListener("DOMContentLoaded", () => {
    const editButtons = Array.from(document.querySelectorAll('.editPostBtn'));
    editButtons.forEach((button) => {
        button.addEventListener("click", async (event) => {
            const postId = event.target.getAttribute('data-post-id'); 
            const newTitle = document.querySelector(`[data-post-id='${postId}'][name='title']`).value;
            const newContent = document.querySelector(`[data-post-id='${postId}'][name='content']`).value;
            const payload = {
                title: newTitle,
                content: newContent,
            };
            try {
                const response = await fetch(`/api/blog/editpost/${postId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                if (response.ok) {
                    window.location.replace('/dashboard');
                } else {
                    alert('Failed to EDIT post');
                }
                } catch (err) {
                    console.error("Error editing post:", err);
            }
        });
    });
});


// Event listener for deleting a blog post
document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = Array.from(document.querySelectorAll('.deletePostBtn'));
    deleteButtons.forEach((button) => {
        button.addEventListener("click", async (event) => {
            const postId = event.target.getAttribute('data-post-id'); 
            try {
                const response = await fetch(`/api/blog/deletepost/${postId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (response.ok) {
                    window.location.replace('/dashboard');
                } else {
                    alert('Failed to DELETE post');
                }
                } catch (err) {
                    console.error("Error deleting post:", err);
            }
        });
    });
});