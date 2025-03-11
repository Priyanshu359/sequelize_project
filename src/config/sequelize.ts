// import { Sequelize } from "sequelize";
// import { createPool } from 'mysql2'; 
// import * as mysql from "mysql2"; 

// import { config } from 'dotenv';


// config();

// const db = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });
// export default db.promise();

import { Sequelize } from "sequelize";
import { config } from 'dotenv';
config();
const dbName = process.env.DB_NAME as string;
const username = process.env.DB_USER as string; // Database username
const password = process.env.DB_PASSWORD as string; // Database password
console.log(username, password);
console.log(dbName);
const sequelize = new Sequelize(
  process.env.DB_NAME as string, // Database name
  process.env.DB_USER as string, // Database username
  process.env.DB_PASSWORD as string, // Database password
  {
    host: process.env.DB_HOST,
    dialect: "mysql",  // ✅ Make sure dialect is "mysql"
    logging: false, // Disable logging
  }
);
// sequelize.sync({ force: false }).then(() => {
//   console.log("Database Synchronized");
// }).catch((err) => {
//   console.error("Database sync failed: ", err);
// });

export default sequelize;
