CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(50),
  age INT
);

INSERT INTO users (name, email, age)
VALUES ('John Smith', 'john.smith@example.com', 25),
       ('Jane Doe', 'jane.doe@example.com', 30),
       ('Michael Johnson', 'michael.johnson@example.com', 35),
       ('Sarah Williams', 'sarah.williams@example.com', 28),
       ('Robert Brown', 'robert.brown@example.com', 32);



CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(50)
);

INSERT INTO customers (name, email)
VALUES ('Ivan Ivanov', 'ivan.ivanov@example.com'),
       ('Maria Smirnova', 'maria.smirnova@example.com'),
       ('Aleksey Petrov', 'aleksey.petrov@example.com'),
       ('Elena Sidorova', 'elena.sidorova@example.com');



CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  price DECIMAL(10, 2),
  category VARCHAR(50)
);

INSERT INTO products (name, price, category)
VALUES ('Phone', 499.99, 'Electronics'),
       ('Laptop', 999.99, 'Electronics'),
       ('Chair', 89.99, 'Furniture'),
       ('Shirt', 29.99, 'Clothing'),
       ('Book', 19.99, 'Books');