let url = "https://dummyjson.com/products";
fetch(url)
.then(function(response) {
    console.log("Status Code=", response.status);
    if (!response.ok) {
        throw new Error("Something went wrong!");
    }
    return response.json();
})
.then(function(data) {
    let products = data.products;
    console.log("First Product Brand=", products[0].brand);
document.getElementById("loading").style.display = "none";
    for (let i = 0; i < 6; i++) {
let product = products[i];
        let card = `
            <div class="card">
                <img src="${product.thumbnail}" alt="Product">
                <h3>${product.title}</h3>
                <p>Brand= ${product.brand}</p>
                <p class="price">Price= $${product.price}</p>
                </div>
        `;
        document.getElementById("products").innerHTML += card;
}
})
.catch(function(error) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("error").innerHTML = error.message;

    console.log(error);
});