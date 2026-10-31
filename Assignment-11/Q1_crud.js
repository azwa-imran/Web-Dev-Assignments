let url = "https://jsonplaceholder.typicode.com/posts";
let allPosts = [];
let titleInput = document.getElementById("titleInput");
let userIdInput = document.getElementById("userIdInput");
let bodyInput = document.getElementById("bodyInput");
let messageBox = document.getElementById("messageBox");
let postsContainer = document.getElementById("postsContainer");
let postCount = document.getElementById("postCount");
function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = "message " + type;
}
async function loadPosts() {
    showMessage("Loading posts...", "loading");
    try {
        let response = await fetch(url + "?_limit=6");
        console.log("GET status=", response.status);

        if (!response.ok) {
            showMessage("Error= could not load posts (status " + response.status + ")", "error");
            return;
        }

        allPosts = await response.json();
        showPosts();
        showMessage("GET successful! Posts loaded. Check the console for response status 200.", "success");
    } catch (error) {
        showMessage("Error= " + error.message, "error");
    }
}
function showPosts() {
    postsContainer.innerHTML = "";
for (let i = 0; i < allPosts.length; i++) {
        let post = allPosts[i];
        postsContainer.innerHTML += `
            <div class="post-card">
                <p class="post-meta">Post ID= ${post.id} · User ID= ${post.userId}</p>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <div class="post-actions">
                    <button class="btn put" onclick="updatePost(${post.id})">PUT full update</button>
                    <button class="btn patch" onclick="changeTitle(${post.id})">PATCH title</button>
                    <button class="btn delete" onclick="deletePost(${post.id})">DELETE</button>
                </div>
            </div>
        `;
    }
postCount.textContent = allPosts.length + " posts shown";
}
async function addPost() {
    let newPost = {
        title: titleInput.value,
        body: bodyInput.value,
        userId: Number(userIdInput.value)
    };
    showMessage("Adding post...", "loading");
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        });
        console.log("POST status=", response.status);

        if (!response.ok) {
            showMessage("Error= post was not added (status " + response.status + ")", "error");
            return;
        }
      let data = await response.json();
        allPosts.unshift(data);
        showPosts();
        showMessage("POST successful! New post id= " + data.id, "success");
        titleInput.value = "";
        bodyInput.value = "";
    } catch (error) {
        showMessage("Error= " + error.message, "error");
    }
}
async function updatePost(id) {
    let post = allPosts.find(p => p.id === id);
    let newTitle = prompt("New title=", post.title);
    let newBody = prompt("New content=", post.body);
    if (newTitle === null || newBody === null) return;
showMessage("Updating post...", "loading");
    try {
        let response = await fetch(url + "/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id, userId: post.userId, title: newTitle, body: newBody })
        });
        console.log("PUT status=", response.status);

        if (!response.ok) {
            showMessage("Error= PUT failed (status " + response.status + ")", "error");
            return;
        }

        post.title = newTitle;
        post.body = newBody;
        showPosts();
        showMessage("PUT successful! Post " + id + " updated.", "success");
    } catch (error) {
        showMessage("Error= " + error.message, "error");
    }
}
async function changeTitle(id) {
    let post = allPosts.find(p => p.id === id);
    let newTitle = prompt("New title=", post.title);
    if (newTitle === null) return;

    showMessage("Updating title...", "loading");
    try {
        let response = await fetch(url + "/" + id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTitle })
        });
        console.log("PATCH status=", response.status);

        if (!response.ok) {
            showMessage("Error= PATCH failed (status " + response.status + ")", "error");
            return;
        }

        post.title = newTitle;
        showPosts();
        showMessage("PATCH successful! Title of post " + id + " updated.", "success");
    } catch (error) {
        showMessage("Error= " + error.message, "error");
    }
}
async function deletePost(id) {
    showMessage("Deleting post...", "loading");
    try {
        let response = await fetch(url + "/" + id, { method: "DELETE" });
        console.log("DELETE status=", response.status);

        if (!response.ok) {
            showMessage("Error= DELETE failed (status " + response.status + ")", "error");
            return;
        }

        allPosts = allPosts.filter(p => p.id !== id);
        showPosts();
        showMessage("DELETE successful! Post " + id + " removed.", "success");
    } catch (error) {
        showMessage("Error= " + error.message, "error");
    }
}
document.getElementById("postForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addPost();
});
document.getElementById("reloadBtn").addEventListener("click", loadPosts);
loadPosts();