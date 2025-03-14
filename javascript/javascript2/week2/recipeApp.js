// Some sample recipes

let recipes = [
  {
    id: 4,
    title: "Koobideh",
    picture_url: "pics/koobideh.jpeg",
    cuisine: "Persian",
    ingredients: [
      { name: "Ground lamb or beef", amount: "500", unit: "g" },
      { name: "Onion", amount: "1", unit: "large" },
      { name: "Salt", amount: "1", unit: "tsp" },
      { name: "Black pepper", amount: "1/2", unit: "tsp" },
      { name: "Saffron (optional)", amount: "1/4", unit: "tsp" },
    ],
    description:
      "Grate onion and squeeze out excess water. Mix ground meat with onion, salt, pepper, and saffron. Shape onto skewers. Grill or broil until cooked. Serve with rice and grilled tomatoes.",
  },
  {
    id: 1,
    title: "Lasagna",
    picture_url: "./pics/lasagna.jpg",
    cuisine: "Italian",
    ingredients: [
      { name: "Lasagna sheets", amount: "12", unit: "sheets" },
      { name: "Ground beef", amount: "500", unit: "g" },
      { name: "Onion", amount: "1", unit: "medium" },
      { name: "Garlic", amount: "2", unit: "cloves" },
      { name: "Crushed tomatoes", amount: "800", unit: "g" },
    ],
    description:
      "Sauté onion and garlic, then brown the ground beef. Add crushed tomatoes. Layer lasagna sheets with meat sauce. Bake until bubbly and golden.",
  },
  {
    id: 2,
    title: "Spaghetti Carbonara",
    picture_url: "./pics/spagetti.jpg",
    cuisine: "Italian",
    ingredients: [
      { name: "Spaghetti", amount: "350", unit: "g" },
      { name: "Guanciale or pancetta", amount: "150", unit: "g" },
      { name: "Eggs", amount: "3", unit: "large" },
      { name: "Egg yolks", amount: "2", unit: "large" },
      { name: "Pecorino Romano cheese", amount: "100", unit: "g" },
    ],
    description:
      "Cook spaghetti al dente. Fry guanciale. Whisk eggs, cheese. Combine pasta, guanciale, and egg mixture. Toss quickly.",
  },
  {
    id: 3,
    title: "Chicken Tikka Masala",
    picture_url: "./pics/tikkamasala.jpg",
    cuisine: "Indian",
    ingredients: [
      { name: "Chicken breast", amount: "500", unit: "g" },
      { name: "Plain yogurt", amount: "200", unit: "g" },
      { name: "Tikka masala spice mix", amount: "2", unit: "tbsp" },
      { name: "Onion", amount: "1", unit: "medium" },
      { name: "Tomato paste", amount: "2", unit: "tbsp" },
    ],
    description:
      "Marinate chicken in yogurt and spices. Grill chicken. Sauté onion. Add tomato paste. Add chicken and simmer.",
  },
  {
    id: 5,
    title: "Ghormeh Sabzi",
    picture_url: "./pics/ghormesabzi.jpg",
    cuisine: "Persian",
    ingredients: [
      { name: "Lamb or beef stew meat", amount: "500", unit: "g" },
      { name: "Red kidney beans", amount: "1", unit: "cup" },
      { name: "Dried limes (limoo amani)", amount: "3-4", unit: "pieces" },
      { name: "Fresh parsley", amount: "2", unit: "cups" },
      { name: "Fresh cilantro", amount: "1", unit: "cup" },
    ],
    description:
      "Sauté meat. Add kidney beans and water. Sauté herbs. Add herbs and dried limes. Simmer until tender. Serve with rice.",
  },
  {
    id: 6,
    title: "Gheymeh",
    picture_url: "pics/gheymeh.jpeg",
    cuisine: "Persian",
    ingredients: [
      { name: "Lamb or beef", amount: "500", unit: "g" },
      { name: "Yellow split peas", amount: "1", unit: "cup" },
      { name: "Onion", amount: "1", unit: "large" },
    ],
    description:
      "Sauté meat and onion. Add tomato paste, split peas, and dried limes. Simmer until tender. Serve with rice and fried potatoes.",
  },
  {
    id: 7,
    title: "Joojeh Kabab",
    picture_url: "pics/joojehkabab.jpeg",
    cuisine: "Persian",
    ingredients: [
      { name: "Chicken breast or thighs", amount: "500", unit: "g" },
      { name: "Onion", amount: "1", unit: "large" },
      { name: "Lemon juice", amount: "1/4", unit: "cup" },
      { name: "Olive oil", amount: "3", unit: "tbsp" },
      { name: "Saffron", amount: "1", unit: "tsp" },
    ],
    description:
      "Marinate chicken in onion, lemon juice, olive oil, and saffron. Grill until cooked. Serve with rice and grilled tomatoes.",
  },
  {
    id: 8,
    title: "Loobia Polo",
    picture_url: "pics/loobiapolo.webp",
    cuisine: "Persian",
    ingredients: [
      { name: "Ground beef or lamb", amount: "500", unit: "g" },
      { name: "Green beans", amount: "500", unit: "g" },
      { name: "Rice", amount: "2", unit: "cups" },
      { name: "Onion", amount: "1", unit: "large" },
      { name: "Tomato paste", amount: "2", unit: "tbsp" },
    ],
    description:
      "Sauté meat and onion. Add green beans and tomato paste. Layer rice and meat mixture. Cook until rice is done. Serve with yogurt.",
  },
  {
    id: 9,
    title: "Fesenjan",
    picture_url: "pics/fesenjan.jpeg",
    cuisine: "Persian",
    ingredients: [
      { name: "Chicken or duck", amount: "500", unit: "g" },
      { name: "Walnuts", amount: "1", unit: "cup" },
      { name: "Pomegranate molasses", amount: "1/2", unit: "cup" },
      { name: "Onion", amount: "1", unit: "large" },
      { name: "Sugar", amount: "1", unit: "tbsp" },
    ],
    description:
      "Sauté meat and onion. Add ground walnuts and pomegranate molasses. Simmer until sauce thickens. Serve with rice.",
  },
  {
    id: 10,
    title: "Kotlet",
    picture_url: "pics/kotlet2.jpg",
    cuisine: "Persian",
    ingredients: [
      { name: "Ground beef or lamb", amount: "500", unit: "g" },
      { name: "Potato", amount: "1", unit: "large" },
      { name: "Onion", amount: "1", unit: "large" },
      { name: "Egg", amount: "1", unit: "large" },
      { name: "Turmeric", amount: "1", unit: "tsp" },
    ],
    description:
      "Mix meat, grated potato, onion, egg, and turmeric. Form patties and fry until golden brown. Serve with bread and pickles.",
  },
];

localStorage.setItem("recipes", JSON.stringify(recipes));

// start of the js

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
  document.getElementById("recipes-grid").innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("div");
    recipeItem.classList.add("recipe-item");

    const img = document.createElement("img");
    if (recipe.picture_url) {
      img.src = recipe.picture_url;
      img.onerror = function () {
        img.src = "pics/default1.png";
      };
    } else {
      img.src = "pics/default1.png";
    }
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

document.getElementById('home').addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.reload(); 
});

function handleAddRecipe() {
  createNewRecipe();
  document.getElementById("recipe-form-popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function handleCancelForm() {
  document.getElementById("recipe-form-popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function handleClosePopup() {
  document.getElementById("recipe-popup").style.display = "none";
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

let currentRecipe = null;

const storedRecipes = localStorage.getItem("recipes");

if (storedRecipes) {
  recipes = JSON.parse(storedRecipes);
} else {
  console.error("No Recipes found!!!");
}
document.getElementById("recipes-grid").innerHTML = "";

displayRecipes(recipes);

document
  .querySelector(".add-recipe-link")
  .addEventListener("click", handleAddRecipe);
document
  .getElementById("cancel-form")
  .addEventListener("click", handleCancelForm);

document
  .querySelector(".close-popup")
  .addEventListener("click", handleClosePopup);



const searchInput = document.getElementById("recipe-search");

searchInput.addEventListener("input", function () {
  console.log("Search input:", searchInput.value.toLowerCase());
  const searchTerm = searchInput.value.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm)
  );
  console.log(filteredRecipes);
  document.getElementById("recipes-grid").innerHTML = "";
  displayRecipes(filteredRecipes);
});

document.getElementById("home").addEventListener("click", () => {
  handleCancelForm();
});

document
  .querySelector(".select-categories")
  .addEventListener("change", function (event) {
    const selectedValue = event.target.value;

    const filteredRecipes = recipes.filter((recipe) =>
      recipe.cuisine.toLowerCase().includes(selectedValue)
    );
    document.getElementById("recipes-grid").innerHTML = "";
    displayRecipes(filteredRecipes);
  });

document
  .querySelector(".select-sort")
  .addEventListener("change", function (event) {
    const selectedValue = event.target.value;
    let sortedRecipes = [...recipes];
    if (selectedValue === "title") {
      sortedRecipes.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });
    } else if (selectedValue === "ingredients") {
      sortedRecipes.sort((a, b) => {
        const ingredientsA = a.ingredients ? a.ingredients.length : 0; 
        const ingredientsB = b.ingredients ? b.ingredients.length : 0;
        return ingredientsA - ingredientsB;
      });
    }

    document.getElementById("recipes-grid").innerHTML = "";
    console.log(sortedRecipes);
    displayRecipes(sortedRecipes);
  });

document.querySelector(".close-popup2").addEventListener("click", function () {
  document.getElementById("recipe-form-popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.getElementById("recipe-popup").style.display = "none";
    document.getElementById("recipe-form-popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  const popup = document.getElementById("recipe-popup");
  const popupContent = document.querySelector(".popup-content");

  if (popup && popupContent && event.target === popup) {
    popup.style.display = "none";
  }
});

function duplicateIngredientFields(container) {
  const originalIngredientDiv = container.querySelector(".ingredients");

  const newIngredientDiv = originalIngredientDiv.cloneNode(true);

  newIngredientDiv.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });

  container.appendChild(newIngredientDiv);
}

document
  .getElementById("add-ingredient-icon")
  .addEventListener("click", function () {
    const ingredientsContainer = document.getElementById("ingredients-list");
    duplicateIngredientFields(ingredientsContainer);
  });

function handleRecipeFormSubmit(event) {
  event.preventDefault();

  if (currentRecipe) {
    currentRecipe.title = document.getElementById("title").value;
    currentRecipe.picture_url = document.getElementById("picture_url").value;
    currentRecipe.description = document.getElementById("description").value;

    const ingredientDivs = document.querySelectorAll(".ingredients");
    const ingredients = [];

    ingredientDivs.forEach((div) => {
      const name = div.querySelector('[name="name"]').value;
      const amount = div.querySelector('[name="amount"]').value;
      const unit = div.querySelector('[name="unit"]').value;

      currentRecipe.ingredients.push({
        name: name,
        amount: amount,
        unit: unit,
      });
    });

    addRecipeToRecipes(recipes);
    document.getElementById("recipe-form-popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("recepies").classList.remove("hidden");
    document.getElementById("recipe-form").reset();
  }
}

document
  .getElementById("recipe-form")
  .addEventListener("submit", handleRecipeFormSubmit);