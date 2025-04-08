const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "localhost",
  user: "evangadi-admins",
  password: process.env.DB_PASSWORD,
  database: "evangadi-practice",
  connectionLimit: 10,
});

module.exports = db.promise();
