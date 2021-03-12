DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
	id INT AUTO_INCREMENT NOT NULL,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    primary key(id)
    add foreign key (role_id) references role(id),
    add foreign key (manager_id) references employee(id));

CREATE TABLE role (
	id INT AUTO_INCREMENT NOT NULL,
    title varchar(30) NOT NULL,
    salary DECIMAL(10,2) NULL,
    department_id INT NOT NULL,
    primary key(id)
    add foreign key (department_id) REFERENCES department(id));

CREATE TABLE department (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    primary key(id)
    );

-- ALTER TABLE employee modify COLUMN manager_id INT NULL;