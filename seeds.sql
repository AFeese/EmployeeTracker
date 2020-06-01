USE employeeDB;

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
