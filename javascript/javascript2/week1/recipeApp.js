function createNewRecipe() {
  currentRecipe = {
    id: Date.now(),
    title: "",
    picture_url: "",
    ingredients: [],
    description: "",
  };
}

function displayRecipes(recipes) {
  const recipesGrid = document.getElementById("recipes-grid");

  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("div");
    recipeItem.classList.add("recipe-item");

    const img = document.createElement("img");
    img.src = recipe.picture_url;
    img.alt = recipe.title;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = `
          <i class="fas fa-edit edit-icon"></i>
          <i class="fas fa-eye view-icon"></i>
      `;

    recipeItem.appendChild(img);
    recipeItem.appendChild(overlay);
    recipesGrid.appendChild(recipeItem);

    // Event listeners
    recipeItem.addEventListener("mouseover", () => {
      recipeItem.classList.add("hovered");
    });

    recipeItem.addEventListener("mouseout", () => {
      recipeItem.classList.remove("hovered");
    });

    recipeItem.addEventListener("click", () => {
      showRecipePopup(recipe);
    });

    overlay.querySelector(".edit-icon").addEventListener("click", (event) => {
      event.stopPropagation();
      console.log("Edit:", recipe.title); 
    });

    overlay.querySelector(".view-icon").addEventListener("click", (event) => {
      event.stopPropagation();
      showRecipePopup(recipe);
    });
  });
}

function showRecipePopup(recipe) {
  const popup = document.getElementById("recipe-popup");
  const popupDetails = document.getElementById("popup-recipe-details");

  let ingredientsList = "";
  for (let item of recipe.ingredients) {
    const ingredient = item;
    ingredientsList += `<li>${ingredient.name}: ${ingredient.amount} ${
      ingredient.unit ? ingredient.unit : ""
    }</li>`;
  }

  popupDetails.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.picture_url}" alt="${recipe.title}" style="max-width: 200px;">
      <p>${recipe.description}</p>
      <ul>
          ${ingredientsList}
      </ul>
  `;

  popup.style.display = "block";
}

function handleAddRecipe() {
  createNewRecipe();
  document.getElementById("recepies").classList.add("hidden");
  document.getElementById("recipe-form-container").style.display = "block";
}

function handleCancelForm() {
  document.getElementById("recipe-form-container").style.display = "none";
  document.getElementById("recepies").classList.remove("hidden");
}

function handleAddIngredient() {
  document.getElementById("ingredient-popup").style.display = "block";
}

function handleCancelAddIngredient() {
  document.getElementById("ingredient-popup").style.display = "none";
}

function handleClosePopup() {
  document.getElementById("recipe-popup").style.display = "none";
}

function handleRecipeFormSubmit(event) {
  event.preventDefault();

  event.preventDefault();

  if (currentRecipe) {
    currentRecipe.title = document.getElementById("title").value;
    currentRecipe.picture_url = document.getElementById("picture_url").value;
    currentRecipe.description = document.getElementById("description").value;

    addRecipeToRecipes(recipes); // Add the recipe to the recipes array

    document.getElementById("recipe-form-container").style.display = "none";
    document.getElementById("recepies").classList.remove("hidden");
    document.getElementById("recipe-form").reset();
  }
}

function addIngredientToRecipe(ingredient) {
  if (currentRecipe) {
    currentRecipe.ingredients.push(ingredient);
  }
}

function addRecipeToRecipes(recipes) {
  if (currentRecipe) {
    recipes.push(currentRecipe);
    currentRecipe = null;
    displayRecipes(recipes);
  }
}

function updateIngredientList() {
  const list = document.getElementById("ingredient-items");
  list.innerHTML = "";
  if (currentRecipe) {
    currentRecipe.ingredients.forEach((ingredient) => {
      const item = document.createElement("li");
      item.textContent = `${ingredient.name}: ${ingredient.amount} ${ingredient.unit}`;
      list.appendChild(item);
    });
  }
}

function handleSubmitIngredient() {
  const name = document.getElementById("ingredient-name").value;
  const amount = document.getElementById("ingredient-amount").value;
  const unit = document.getElementById("ingredient-unit").value;
  addIngredientToRecipe({ name, amount, unit });
  updateIngredientList();
  document.getElementById("ingredient-popup").style.display = "none";
  document.getElementById("ingredient-form").reset();
}

let currentRecipe = null;

const storedRecipes = localStorage.getItem("recipes");

if (storedRecipes) {
  recipes = JSON.parse(storedRecipes);
} else {
  console.error("No Recipes found!!!");
}
displayRecipes(recipes);

document
  .querySelector(".add-recipe-link")
  .addEventListener("click", handleAddRecipe);
document
  .getElementById("cancel-form")
  .addEventListener("click", handleCancelForm);
document
  .getElementById("add-ingredient-icon")
  .addEventListener("click", handleAddIngredient);
document
  .querySelector("#cancel-addIngredient")
  .addEventListener("click", handleCancelAddIngredient);
document
  .querySelector(".close-popup")
  .addEventListener("click", handleClosePopup);
document
  .getElementById("submit-ingredient")
  .addEventListener("click", handleSubmitIngredient);
document
  .getElementById("recipe-form")
  .addEventListener("submit", handleRecipeFormSubmit);
