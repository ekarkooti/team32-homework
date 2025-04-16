function createNewRecipe() {
  currentRecipe = {
    id: Date.now(),
    title: "",
    picture_url: "",
    timeRequired: 0,
    cuisine: "",
    ingredients: [],
    description: "",
  };
}

function displayRecipes(recipes) {
  const recipesGrid = document.getElementById("recipes-grid");
  recipesGrid.innerHTML = "";

  recipes.forEach((recipe) => {
    const recipeCard = createRecipeCard(recipe);
    recipesGrid.appendChild(recipeCard);
  });
}

function createRecipeCard(recipe) {
  const recipeItem = document.createElement("div");
  recipeItem.classList.add("recipe-card");

  const img = createRecipeImage(recipe.picture_url, recipe.title);
  const recipeContent = createRecipeContent(recipe);
  const overlay = createOverlay(recipe);

  recipeItem.appendChild(img);
  recipeItem.appendChild(recipeContent);
  recipeItem.appendChild(overlay);

  addRecipeEventListeners(recipeItem, overlay, recipe);
  return recipeItem;
}

function createRecipeImage(pictureUrl, title) {
  const img = document.createElement("img");
  img.classList.add("recipe-image");
  img.src = pictureUrl || "pics/background4.jpg";
  img.alt = title;
  img.onerror = () => (img.src = "pics/default1.png");
  return img;
}

function createRecipeContent(recipe) {
  const recipeContent = document.createElement("div");
  recipeContent.classList.add("recipe-content");

  recipeContent.innerHTML = `
    <h3 class="recipe-title">${recipe.title}</h3>
    <p class="recipe-meta">
      <span><i class="fas fa-clock"></i> ${
        recipe.timeRequired || "N/A"
      } mins</span> 
      <span><i class="fas fa-list"></i> ${
        recipe.ingredients.length
      } ingredients</span> 
      <span><i class="fas fa-map-marker-alt"></i> ${
        recipe.cuisine || "Unknown"
      }</span>
    </p>
  `;
  return recipeContent;
}

function createOverlay(recipe) {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("overlay1");

  overlayCard.innerHTML = `
    <i class="fas fa-edit edit-icon" title="Edit"></i>
    <i class="fas fa-eye view-icon" title="View"></i>
    <i class="fas fa-trash delete-icon" title="Delete"></i>
  `;
  return overlayCard;
}

function handleDeleteRecipe(recipeId) {
  if (confirm("Are you sure you want to delete this recipe?")) {
    recipes = recipes.filter((r) => r.id !== recipeId);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    displayRecipes(recipes);
  }
}

function handleEditRecipe(recipe) {
  hideAllOverlays();
  currentRecipe = recipe;

  document.getElementById("title").value = recipe.title;
  document.getElementById("picture_url").value = recipe.picture_url;
  document.getElementById("description").value = recipe.description;

  const ingredientsContainer = document.getElementById("ingredients-list");
  ingredientsContainer.innerHTML = "";

  recipe.ingredients.forEach((ing) => {
    const ingredientDiv = document.createElement("div");
    ingredientDiv.classList.add("ingredients");
    ingredientDiv.innerHTML = `
      <input name="name" placeholder="Name" value="${ing.name}">
      <input name="amount" placeholder="Amount" value="${ing.amount}">
      <input name="unit" placeholder="Unit" value="${ing.unit}">
    `;
    ingredientsContainer.appendChild(ingredientDiv);
  });

  document.getElementById("recipe-form-popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function addRecipeEventListeners(recipeItem, overlay, recipe) {
  recipeItem.addEventListener("mouseover", () =>
    recipeItem.classList.add("hovered")
  );
  recipeItem.addEventListener("mouseout", () =>
    recipeItem.classList.remove("hovered")
  );
  recipeItem.addEventListener("click", () => showRecipePopup(recipe));

  overlay.querySelector(".edit-icon").addEventListener("click", (event) => {
    event.stopPropagation();
    handleEditRecipe(recipe);
  });

  overlay.querySelector(".view-icon").addEventListener("click", (event) => {
    event.stopPropagation();
    showRecipePopup(recipe);
  });

  overlay.querySelector(".delete-icon").addEventListener("click", (event) => {
    event.stopPropagation();
    handleDeleteRecipe(recipe.id);
  });
}
const recipeCards = document.querySelectorAll(".recipe-card");

recipeCards.forEach((card) => {
  const overlay = card.querySelector(".overlay1");

  card.addEventListener("mouseenter", () => {
    overlay.style.display = "flex";
  });

  card.addEventListener("mouseleave", () => {
    overlay.style.display = "none";
  });
});

function showRecipePopup(recipe) {
  flag = 0;

  document.getElementById("popup-title").textContent = recipe.title;
  document.getElementById("popup-image").src = recipe.picture_url;
  document.getElementById("popup-image").alt = recipe.title;
  document.getElementById("popup-description").textContent = recipe.description;

  // Populate ingredients list
  const ingredientsList = document.getElementById("popup-ingredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = `${ingredient.name}: ${ingredient.amount} ${
      ingredient.unit || ""
    }`;
    ingredientsList.appendChild(li);
  });

  document.getElementById("recipe-popup").style.display = "block";
  window.scrollTo(0, 0);
  document.getElementById("recipe-popup").scrollTop = 0;

  // Add event listener for prices
  document.getElementById("showPricesButton").addEventListener("click", () => {
    if (flag == 0) {
      addIngredientPrices();
    }
  });
}
document.getElementById("home").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.reload();
});

function handleAddRecipe() {
  hideAllOverlays();
  createNewRecipe();
  document.getElementById("recipe-form-popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function handleCancelForm() {
  showAllOverlays();
  document.getElementById("recipe-form-popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function handleClosePopup() {
  showAllOverlays();
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
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }
}

//function to populate the categories drop down
function populateCuisineCategories(recipes) {
  const categorySelect = document.querySelector(".select-categories");
  const cuisinesSet = new Set();

  recipes.forEach((recipe) => {
    if (recipe.cuisine && recipe.cuisine.trim() !== "") {
      cuisinesSet.add(recipe.cuisine.trim().toLowerCase());
    }
  });

  while (categorySelect.options.length > 1) {
    categorySelect.remove(1);
  }

  Array.from(cuisinesSet)
    .sort()
    .forEach((cuisine) => {
      const option = document.createElement("option");
      option.value = cuisine;
      option.textContent = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
      categorySelect.appendChild(option);
    });
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

  const filteredRecipes = recipes.filter((recipe) => {
    const titleMatch = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const ingredientMatch = recipe.ingredients.some((ingredient) =>
      ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return titleMatch || ingredientMatch;
  });
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
    recipes = filteredRecipes;
    displayRecipes(filteredRecipes);
    document.getElementById(
      "messageFilter"
    ).innerText = `# ${event.target.value} Recipes`;
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
    recipes = sortedRecipes;
    document.getElementById(
      "messageSort"
    ).innerText = `Sorted by:  ${event.target.value} `;
  });

document
  .querySelector(".close-popupAddRecipe")
  .addEventListener("click", function () {
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

//function to handle adding new recipe
function handleRecipeFormSubmit(event) {
  event.preventDefault();

  if (currentRecipe) {
    currentRecipe.title = document.getElementById("title").value;
    currentRecipe.picture_url = document.getElementById("picture_url").value;
    currentRecipe.description = document.getElementById("description").value;
    currentRecipe.ingredients = [];

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

// cooking timer

function startCookingTimer(durationInSeconds) {
  const timerDisplay = document.getElementById("cookingTimerDisplay");
  const endTime = Date.now() + durationInSeconds * 1000;
  let timerInterval;

  function updateTimer() {
    let timeLeft = Math.max(0, endTime - Date.now());

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      let audio = new Audio("beep-01a.mp3");
      audio.play();

      return;
    }

    let seconds = Math.floor(timeLeft / 1000);
    timerDisplay.textContent = `Remaining time: ${seconds}`;
  }

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
  console.log("timer started");
}

document
  .getElementById("startTimer")
  .addEventListener("click", () => startCookingTimer(6));

// show page visit time
function trackPageTime() {
  let startTime = Date.now();
  const display = document.getElementById("timer");
  let interval;

  function update() {
    const seconds = Math.floor((Date.now() - startTime) / 1000);

    display.textContent = `Session duration (seconds): ${seconds}`;
  }

  interval = setInterval(update, 1000);
  update();
}

window.addEventListener("load", trackPageTime);

let currentRecipe = null;
async function initializeRecipes() {
  const response = await fetch(
    "https://raw.githubusercontent.com/ekarkooti/ekarkooti.github.io/refs/heads/main/recipes.txt"
  );
  const jsonData = await response.json();
  return jsonData;
}

initializeRecipes().then((response) => {
  // recipes = response;
  const storedRecipes = localStorage.getItem("recipes");
  if (storedRecipes) {
    recipes = JSON.parse(storedRecipes);
    // recipes = storedRecipes;
  } else {
    recipes = response;
  }
  document.getElementById("recipes-grid").innerHTML = "";

  displayRecipes(recipes);
  populateCuisineCategories(recipes);
});

async function fetchIngredientPrices() {
  const response = await fetch(
    "https://raw.githubusercontent.com/ekarkooti/ekarkooti.github.io/refs/heads/main/prces.json"
  );

  const ingredientPrices = await response.json();
  return ingredientPrices;
}
let flag = 0;
async function addIngredientPrices() {
  const prices = await (
    await fetch(
      "https://raw.githubusercontent.com/ekarkooti/ekarkooti.github.io/main/prces.json"
    )
  ).json();
  const listItems = document
    .getElementById("popup-ingredients")
    .querySelectorAll("li");

  listItems.forEach((li) => {
    const existingSpan = li.querySelector(".price-append");
    if (existingSpan) existingSpan.remove();

    const searchText = li.textContent.split(":")[0];
    const priceObj = prices.filter((price) => price.name == searchText)[0];
    console.log(priceObj);
    li.innerHTML += priceObj
      ? `<span class="price-append"> price: (${priceObj.price} ${priceObj.unit})</span>`
      : " (Not found)";
  });
  flag = 1;
}

function hideAllOverlays() {
  const overlays = document.querySelectorAll(".overlay1");
  overlays.forEach((overlay) => {
    overlay.style.display = "none";
  });
}

function showAllOverlays() {
  const overlays = document.querySelectorAll(".overlay1");
  overlays.forEach((overlay) => {
    overlay.style.display = "flex";
  });
}
