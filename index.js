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
}
// SELECT * FROM role;
async function viewAllRoles() {
  console.log("");
  let query = "SELECT * FROM role";
  const rows = await db.query(query);
  console.table(rows);
  return rows;
}
// SELECT * FROM employee;
async function viewAllEmployees() {
  console.log("");
  let query = "SELECT * FROM employee";
  const rows = await db.query(query);
  console.table(rows);
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
          // "Add a Department",
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

      // case 'Add a Department': {
      //   const newDepartmentName = await getDepartmentInfo();
      //   await addDepartment(newDepartmentName);
      //   break;
      // }

      case 'Exit': {
        exitLoop = true;
        process.exit(0); // successful exit
        return;
      }

      default:
        console.log(`Internal warning. Action ${prompt.action} is not yet defined`);
    };
  };
};

mainQuestions();