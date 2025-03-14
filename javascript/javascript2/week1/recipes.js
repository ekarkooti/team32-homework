let recipes = [
    {
      id: 1,
      title: "Lasagna",
      picture_url: "./pics/lasagna.jpg",
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
      id: 4,
      title: "Chocolate Chip Cookies",
      picture_url: "./pics/choclatechipsjpg.jpg",
      ingredients: [
        { name: "Butter", amount: "225", unit: "g" },
        { name: "Brown sugar", amount: "200", unit: "g" },
        { name: "Granulated sugar", amount: "100", unit: "g" },
        { name: "Eggs", amount: "2", unit: "large" },
        { name: "Vanilla extract", amount: "1", unit: "tsp" },
      ],
      description:
        "Cream butter and sugars. Add eggs and vanilla. Mix dry ingredients. Stir in chocolate chips. Bake until golden brown.",
    },
    {
      id: 5,
      title: "Ghormeh Sabzi",
      picture_url: "./pics/ghormesabzi.jpg",
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
      id: 1,
      title: "Lasagna",
      picture_url: "./pics/lasagna.jpg",
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
      id: 4,
      title: "Chocolate Chip Cookies",
      picture_url: "./pics/choclatechipsjpg.jpg",
      ingredients: [
        { name: "Butter", amount: "225", unit: "g" },
        { name: "Brown sugar", amount: "200", unit: "g" },
        { name: "Granulated sugar", amount: "100", unit: "g" },
        { name: "Eggs", amount: "2", unit: "large" },
        { name: "Vanilla extract", amount: "1", unit: "tsp" },
      ],
      description:
        "Cream butter and sugars. Add eggs and vanilla. Mix dry ingredients. Stir in chocolate chips. Bake until golden brown.",
    },
    {
      id: 5,
      title: "Ghormeh Sabzi",
      picture_url: "./pics/ghormesabzi.jpg",
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
   
  ];

  localStorage.setItem("recipes", JSON.stringify(recipes));
