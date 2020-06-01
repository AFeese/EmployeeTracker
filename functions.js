const mysql = require("mysql");
const inquirer = require("inquirer");
// let cTable = require("console.table");
// let Database = require("./asyncdb");
// const util = require("util");

//----VIEWING INFORMATION----//
// SELECT * FROM role;
async function viewAllRoles() {
    console.log("");
    let query = "SELECT * FROM role";
    const rows = await db.query(query);
    console.table(rows);
    return rows;
  }
  // SELECT * from department;
  async function viewAllDepartments() {
    let query = "SELECT * FROM department";
    const rows = await db.query(query);
    console.table(rows);
  }
  // SELECT * FROM employee;
  async function viewAllEmployees() {
    console.log("");
    let query = "SELECT * FROM employee";
    const rows = await db.query(query);
    console.table(rows);
  };