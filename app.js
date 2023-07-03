import 'dotenv/config';
import express from 'express';
import mysql from 'mysql2';

const app = express();
const dbConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
});

dbConnection.connect(function (err) {
  if (err) {
    console.log("Can't connect");
    console.dir(err);
  } else {
    console.log('Connection success.');
  }
});



