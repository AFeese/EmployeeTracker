DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;

CREATE TABLE department(
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER NULL
);


-- DEPARTMENTS --
INSERT INTO department (name) VALUES ("Operations");
INSERT INTO department (name) VALUES ("Mission Support");
INSERT INTO department (name) VALUES ("Safety");

-- ROLES --
INSERT INTO role (title, salary, department_id) VALUES ("Administrator", 500000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Associate Administrator", 200000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Executive Director", 150000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 100000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Executive Assistant", 75000, 3);


-- EMPLOYEES --
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jim", "Bridenstein", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Bob", "Gibbs", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("JayM.", "Henn", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Harmony", "Myers", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Dennie", "Gonia", 5, 4);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;


