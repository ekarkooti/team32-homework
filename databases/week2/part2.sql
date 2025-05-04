CREATE DATABASE schoolDB;

-- Create the Class table
CREATE TABLE Class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    begins DATE,
    ends DATE
);

-- Create the Student table with a foreign key referencing Class
CREATE TABLE Student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class (id)
);
-- Create an index on the name column of the Student table
CREATE INDEX idx_student_name ON Student (name (255));

-- Add a new column 'status' to the Class table with an ENUM constraint
ALTER TABLE Class
ADD COLUMN status ENUM(
    'not-started',
    'ongoing',
    'finished'
);