// Some sample recipes

let recipes = [
    {
      id: 4,
      title: "Koobideh",
      picture_url: "pics/koobideh.jpeg",
      timeRequired:60,
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
      timeRequired:60,
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
      timeRequired:60,
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
      timeRequired:60,
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
      timeRequired:60,
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
      timeRequired:60,
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
      timeRequired:60,
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
      timeRequired:60,
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
      timeRequired:60,
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
      timeRequired:60,
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