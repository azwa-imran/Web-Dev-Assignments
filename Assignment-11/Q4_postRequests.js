let url = "https://jsonplaceholder.typicode.com/posts";
async function sendRequest(url, method, body = null) {
    let options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (body != null) {
        options.body = JSON.stringify(body);
    }
    let response = await fetch(url, options);
    console.log("Status Code=", response.status);
    if (!response.ok) {
        throw new Error("Request failed!");
    }
    if (method == "DELETE") {
        return {
            status: response.status
        };
    }
    let data = await response.json();
    return {
        status: response.status,
        data: data
    };
}
function showResult(data) {
    document.getElementById("result").innerHTML =
        JSON.stringify(data, null, 2);
}
document.getElementById("postForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    try {
        let post = {
            title: document.getElementById("title").value,
            body: document.getElementById("content").value,
            userId: Number(document.getElementById("userId").value)
        };
        let result = await sendRequest(url, "POST", post);
        showResult(result);
        console.log("Returned ID=", result.data.id);
    }
    catch (error) {
        document.getElementById("result").innerHTML = error.message;
    }
});
async function updatePost() {
    try {
        let post = {
            id: 1,
            title: "Updated Announcement",
            body: "This is the complete updated content.",
            userId: 1
        };
        let result = await sendRequest(url + "/1", "PUT", post);
        showResult(result);
    }
    catch (error) {
        document.getElementById("result").innerHTML = error.message;
    }
}
async function patchPost() {
    try {
        let post = {
            title: "Only Title Updated"
        };
        let result = await sendRequest(url + "/1", "PATCH", post);
        showResult(result);
    }
    catch (error) {
        document.getElementById("result").innerHTML = error.message;
    }
}
async function deletePost() {
    try {
        let result = await sendRequest(url + "/1", "DELETE");
        showResult(result);
    }
    catch (error) {

        document.getElementById("result").innerHTML = error.message;

    }
}