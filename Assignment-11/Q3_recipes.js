let url = "https://dummyjson.com/recipes";
async function getRecipes() {
    try {
        let response = await fetch(url);
        console.log("Status Code=", response.status);
        document.getElementById("status").innerHTML ="Status Code=" + response.status;
        if (!response.ok) {
            throw new Error("Failed to load recipes!");
        }
        let data = await response.json();
        let recipes = data.recipes.filter(function(recipe) {
    return recipe.cuisine == "Pakistani";
});
        document.getElementById("loading").style.display = "none";
       for (let i = 0; i < recipes.length; i++){
            let recipe = recipes[i];
            let card = `
                <div class="card">
                    <img src="${recipe.image}" alt="Recipe">
                    <h3>${recipe.name}</h3>
                    <p>Cuisine= ${recipe.cuisine}</p>
                    <p>Preparation Time= ${recipe.prepTimeMinutes} minutes</p>
                    <button onclick="showIngredients(${i})">
                        View Ingredients
                    </button>
                </div>
                `;
            document.getElementById("recipes").innerHTML += card;
        }
        window.allRecipes = recipes;
    }
    catch (error) {
        document.getElementById("loading").style.display = "none";
        document.getElementById("error").innerHTML = error.message;
        console.log(error);
    }
}
function showIngredients(index) {
    let recipe = window.allRecipes[index];
    let result = "<h3>" + recipe.name + " Ingredients</h3>";
    result += "<ul>";
    for (let i = 0; i < recipe.ingredients.length; i++) {
        result += "<li>" + recipe.ingredients[i] + "</li>";
    }
    result += "</ul>";
    document.getElementById("details").innerHTML = result;
}
getRecipes();