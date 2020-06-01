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


