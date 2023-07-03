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

const queries = sqlFile.split(';');
const validQueries = queries.filter((query) => query.trim() !== '');

validQueries.forEach((query) => {
  dbConnection.query(query, (err, results) => {
    if (err) {
      console.error('Ошибка выполнения запроса:', err);
      return;
    }

    console.log('Результаты запроса:', results);
  });
});

dbConnection.end();