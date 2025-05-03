--  Table: User
CREATE TABLE User (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL
);

--  Table: Recipe
CREATE TABLE Recipe (
    RecipeID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Instructions TEXT NOT NULL,
    CookTime INT,
    PrepTime INT,
    Servings INT,
    CreatedDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES User (UserID)
);

--  Table: Ingredient
CREATE TABLE Ingredient (
    IngredientID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Description TEXT
);

--  Table: RecipeIngredient
CREATE TABLE RecipeIngredient (
    RecipeIngredientID INT PRIMARY KEY AUTO_INCREMENT,
    RecipeID INT,
    IngredientID INT,
    Amount VARCHAR(255) NOT NULL,
    Unit VARCHAR(50),
    FOREIGN KEY (RecipeID) REFERENCES Recipe (RecipeID),
    FOREIGN KEY (IngredientID) REFERENCES Ingredient (IngredientID)
);

--  Table: Category
CREATE TABLE Category (
    CategoryID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL
);

--  Table: RecipeCategory
CREATE TABLE RecipeCategory (
    RecipeCategoryID INT PRIMARY KEY AUTO_INCREMENT,
    RecipeID INT,
    CategoryID INT,
    FOREIGN KEY (RecipeID) REFERENCES Recipe (RecipeID),
    FOREIGN KEY (CategoryID) REFERENCES Category (CategoryID)
);