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
  `;
  return overlayCard;
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
    console.log("Edit:", recipe.title);
  });

  overlay.querySelector(".view-icon").addEventListener("click", (event) => {
    event.stopPropagation();
    showRecipePopup(recipe);
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
      <div id="cookingTimerDisplay"></div>
      <img src="${recipe.picture_url}" alt="${recipe.title}" >
      <p>${recipe.description}</p>
      <ul>
          ${ingredientsList}
      </ul>
      <button id="startTimer"></button>
      <button id="showPricesButton">Show Prices</button>
  `;

  popup.style.display = "block";
  document.getElementById("showPricesButton").addEventListener("click", () => {
    addIngredientPrices();
  });
}

document.getElementById("home").addEventListener("click", function (event) {
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
    localStorage.setItem(recipes, JSON.stringify(recipes));
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

// js2 week3

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

//js3 week1

let recepise;
let currentRecipe = null;
async function initializeRecipes() {
  const response = await fetch(
    "https://raw.githubusercontent.com/ekarkooti/ekarkooti.github.io/refs/heads/main/recipes.txt"
  );
  const jsonData = await response.json();
  return jsonData;
}

initializeRecipes().then((response) => {
  recipes = response;
  const storedRecipes = localStorage.getItem("recipes1");
  if (storedRecipes) {
    recipes = JSON.parse(storedRecipes);
    recipes = storedRecipes;
  }
  document.getElementById("recipes-grid").innerHTML = "";

  displayRecipes(recipes);
});

async function fetchIngredientPrices() {
  const response = await fetch(
    "https://raw.githubusercontent.com/ekarkooti/ekarkooti.github.io/refs/heads/main/prces.json"
  );

  const ingredientPrices = await response.json();
  return ingredientPrices;
}

async function addIngredientPrices() {
  const prices = await (
    await fetch(
      "https://raw.githubusercontent.com/ekarkooti/ekarkooti.github.io/main/prces.json"
    )
  ).json();
  const listItems = document
    .getElementById("popup-recipe-details")
    .querySelectorAll("li");
  listItems.forEach((li) => {
    const searchText = li.textContent.split(":")[0];
    const priceObj = prices.filter((price) => price.name == searchText)[0];
    console.log(priceObj);
    li.innerHTML += priceObj
      ? `<span class="price-append"> price: (${priceObj.price} ${priceObj.unit})</span>`
      : " (Not found)";
  });
}
