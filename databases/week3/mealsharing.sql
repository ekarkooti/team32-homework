CREATE DATABASE MealSharing;

use MealSharing;

CREATE Table Meal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    when_date DATE NOT NULL,
    max_reservations int NOT NULL,
    price DECIMAL NOT NULL,
    created_date DATE NOT NULL
);

CREATE Table reservation (
    id int PRIMARY KEY AUTO_INCREMENT,
    number_of_guests int NOT NULL,
    meal_id int,
    created_date DATE NOT NULL,
    contact_phonenumber VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES Meal (id) ON DELETE CASCADE
);

CREATE Table review (
    id int PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    meal_id int,
    stars int,
    created_date DATE NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES Meal (id) ON DELETE CASCADE
);

-- queries

-- get all meals
SELECT * from Meal;

-- add a new meal
INSERT INTO
    Meal (
        title,
        description,
        location,
        when_date,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Kebab',
        'Description of Kebab',
        'Iran',
        CURRENT_DATE(),
        20,
        55.00,
        '2020-02-02'
    );

-- get a meal with any id
select title from meal where id = 1;

-- update a meal with any id
UPDATE Meal SET title = "new title" WHERE id = 1;

-- delete a meal with any id
DELETE FROM Meal WHERE id = 1;

-- reservations
-- get all reservations
SELECT * from reservation;

INSERT INTO
    Reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        20,
        3,
        CURRENT_DATE(),
        '21212122',
        'Ehsan',
        'test@gmail.com'
    );
-- get a reservation with any id
select contact_email from reservation where id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation
set
    contact_email = "newEmail@gmail.com"
where
    id = 1;

-- Delete a reservation with any id, fx 1
DELETE from reservation where id = 1;

-- review table querries

-- get all reviews
SELECT * from review;

-- add a new review

INSERT INTO
    Review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Review Title',
        'Review Description',
        2,
        3,
        CURRENT_DATE()
    );

-- get a review with any id

select title from review where id = 1;

-- update a review with any id
UPDATE review set title = "new title" where id = 1;

-- delete a review
delete from review where id = 1;

-- additional querries

-- get all meals taht has price lower than 90
SELECT title from meal WHERE price < 90;

-- get meals that still have available reservations
SELECT m.*
FROM Meal m
    LEFT JOIN reservation r ON m.id = r.meal_id
GROUP BY
    m.id
HAVING
    m.max_reservations > IFNULL(SUM(r.number_of_guests), 0);

-- get meals that partially match a title
SELECT title from meal where title like "%Red%";

-- Get meals that has been created between two dates
SELECT title
FROM Meal
WHERE
    created_date BETWEEN '2020-01-01' AND '2020-03-01';

-- Get only a specific number of meals, e.g., 5
SELECT title FROM Meal LIMIT 5;

-- Get the meals that have good reviews (e.g., average rating >= 4)
SELECT m.title
FROM Meal m
    JOIN Review r ON r.meal_id = m.id
GROUP BY
    m.id,
    m.title
HAVING
    AVG(r.stars) >= 4;

-- Get reservations for a specific meal sorted by created_date
SELECT r.*
FROM Reservation r
WHERE
    r.meal_id = 2
ORDER BY r.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT m.title, AVG(r.stars) AS average_stars
FROM Meal m
    LEFT JOIN Review r ON r.meal_id = m.id
GROUP BY
    m.id,
    m.title
ORDER BY average_stars DESC;