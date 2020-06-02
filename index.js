const mysql = require("mysql");
const inquirer = require("inquirer");
let cTable = require("console.table");
let Database = require("./asyncdb");
// const util = require("util");

let db = new Database({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "AshleyFeeseSql",
  database: "employeeDB"
});

//------------------------------------VIEWING INFORMATION queries-----------------//
// SELECT * FROM department;
async function viewAllDepartments() {
  let query = "SELECT * FROM department";
  const rows = await db.query(query);
  console.table(rows);
};
// SELECT * FROM role;
async function viewAllRoles() {
  console.log("");
  let query = "SELECT * FROM role";
  const rows = await db.query(query);
  console.table(rows);
  return rows;
};
// SELECT * FROM employee;
async function viewAllEmployees() {
  console.log("");
  let query = "SELECT * FROM employee";
  const rows = await db.query(query);
  console.table(rows);
};

//-------------------------------DEPARTMENT INFORMATION-----------------------------//
//----GETTING ALL DEPARTMENT NAMES----//
async function getDepartmentNames() {
  let query = "SELECT name FROM department";
  const rows = await db.query(query);
  let departments = [];
  for (const row of rows) {
    departments.push(row.name);
  }
  return departments;
};
//----FINDS DEPARTMENT BY ID----//
async function getDepartmentId(departmentName) {
  let query = "SELECT * FROM department WHERE department.name=?";
  let args = [departmentName];
  const rows = await db.query(query, args);
  return rows[0].id;
};
async function addDepartment(departmentInfo) {
  const departmentName = departmentInfo.departmentName;
  let query = 'INSERT into department (name) VALUES (?)';
  let args = [departmentName];
  const rows = await db.query(query, args);
  console.log(`Added department named ${departmentName}`);
};
async function getDepartmentInfo() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new department?",
        name: "departmentName"
      }
    ])
};
//------------------------------------ROLE INFORMATION------------------------------//
async function getRoles() {
  let query = "SELECT title FROM role";
  const rows = await db.query(query);
  let roles = [];
  for (const row of rows) {
    roles.push(row.title);
  }
  return roles;
};
async function getRoleId(roleName) {
  let query = "SELECT * FROM role WHERE role.title=?";
  let args = [roleName];
  const rows = await db.query(query, args);
  return rows[0].id;
};
async function addRole(roleInfo) {
  const departmentId = await getDepartmentId(roleInfo.departmentName);
  const salary = roleInfo.salary;
  const title = roleInfo.roleName;
  let query = 'INSERT into role (title, salary, department_id) VALUES (?,?,?)';
  let args = [title, salary, departmentId];
  const rows = await db.query(query, args);
  console.log(`Added role ${title}`);
};
async function getRoleInfo() {
  const departments = await getDepartmentNames();
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of the new role?",
        name: "roleName"
      },
      {
        type: "input",
        message: "What is the salary of the new role?",
        name: "salary"
      },
      {
        type: "list",
        message: "Which department uses this role?",
        name: "departmentName",
        choices: [
          ...departments
        ]
      }
    ])
};


//-------------------------------------MAIN QUESTIONS------------------------------//
async function mainPrompt() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: [
          "View All Employees",
          "View All Departments",
          "View All Roles",
          "Add a Department",
          "Add a Role",
          // "Add an Employee",
          "Exit"
        ]
      }
    ])
};

async function mainQuestions() {
  let exitLoop = false;
  while (!exitLoop) {
    const prompt = await mainPrompt();
    switch (prompt.action) {
      case 'View All Employees': {
        await viewAllEmployees();
        break;
      }
      case 'View All Departments': {
        await viewAllDepartments();
        break;
      }
      case 'View All Roles': {
        await viewAllRoles();
        break;
      }
      case 'Add a Department': {
        const newDepartmentName = await getDepartmentInfo();
        await addDepartment(newDepartmentName);
        break;
      }
      case 'Add a Role': {
        const newRole = await getRoleInfo();
        console.log("add a role");
        await addRole(newRole);
        break;
      }
      case 'Exit': {
        exitLoop = true;
        process.exit(0);
        // return;
      }
      default:
        console.log(`Error: ${prompt.action}`);
    };
  };
};

mainQuestions();