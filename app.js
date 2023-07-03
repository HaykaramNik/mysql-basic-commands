import 'dotenv/config';
import mysql from 'mysql2';
import path from 'path';
import fs from 'fs';

const sqlFilePath = path.join(path.resolve(), 'tables.sql');
const sqlFile = fs.readFileSync(sqlFilePath, 'utf-8');

const dbConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
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

dbConnection.query(
  'SELECT MIN(age) AS "minimal age from users" FROM users',
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        '----------------------------------operator MIN()-------------------------------'
      );
      console.log(result);
      console.log();
    }
  }
);

dbConnection.query(
  'SELECT MAX(age) AS "maximal age from users" FROM users',
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        '----------------------------------operator MAX()-------------------------------'
      );
      console.log(result);
      console.log();
    }
  }
);

dbConnection.query(
  'SELECT * FROM users WHERE age>30 AND age<35',
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        '----------------------------------operator AND---------------------------------'
      );
      console.log(result);
      console.log();
    }
  }
);

dbConnection.query(
  'SELECT * FROM products WHERE category="Electronics" OR name="Book"',
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        '----------------------------------operator OR----------------------------------'
      );
      console.log(result);
      console.log();
    }
  }
);

dbConnection.query(
  'SELECT * FROM products WHERE NOT category="Electronics"',
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        '----------------------------------operator NOT---------------------------------'
      );
      console.log(result);
      console.log();
    }
  }
);

dbConnection.query(
  'SELECT * FROM products WHERE category LIKE "%ics"',
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        '----------------------------------operator LIKE--------------------------------'
      );
      console.log(result);
      console.log();
    }
  }
);

dbConnection.query(
  'SELECT * FROM users WHERE age BETWEEN 28 AND 32',
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        '----------------------------------operator BETWEEN-----------------------------'
      );
      console.log(result);
      console.log();
    }
  }
);

dbConnection.query(
  'SELECT name, email FROM users UNION SELECT name, email FROM customers',
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        '----------------------------------operator UNION-------------------------------'
      );
      console.log(result);
      console.log();
    }
  }
);

dbConnection.end();
