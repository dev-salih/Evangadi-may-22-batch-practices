//! step 1(import modules)
const express = require("express");
const mysql = require("mysql2");

//! step 2 (initialize express)
let app = express();

//! step 5 (set up database connection)
let myDBconnection = mysql.createConnection({
  host: "localhost",
  user: "salih",
  password: "crudSelfPractice@1234",
  database: "crudSelfDB",
  port: 8889,
});

//! step 6 (set up db and user in phpadmin)

//! step 7 ()
myDBconnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db connected successfully");
  }
});

//! step 8 (create table)
app.get("/createTable", (req, res) => {
  let tableSchema = `CREATE TABLE if not exists userInformation(
  user_id int auto_increment,
  user_first_name varchar(255) null,
  user_last_name varchar(255) null,
  user_email varchar(255) null,
  user_batch varchar(255) null,
  user_group varchar(255) null,
  user_course varchar(255) null,
  PRIMARY KEY(user_id)
  )`;

  myDBconnection.query(tableSchema, (err, data, feild) => {
    if (err) {
      console.log(err);
    } else {
      console.log("table created successfully");
      res.send("Table created successfully");
    }
  });
});

//! step 9 (data insertion)
app.post("/createUser", (req, res) => {
  
  const { firstName, lastName, email, batch, group, course } = req.body;

  let insertQuery = `INSERT INTO userInformation(
  user_first_name, 
  user_last_name, 
  user_email, 
  user_batch, 
  user_group, 
  user_course
  )
  VALUES(?, ?, ?, ?, ?, ?)`;

  myDBconnection.query(
    insertQuery,
    [firstName, lastName, email, batch, group, course],
    (err, data, field) => {
      if (err) {
        console.log(err);
      } else {
        console.log("data inserted successfully");
        res.send("data inserted successfully");
      }
    },
  );
});

//! step 4 (test backend)
app.get("/test", (req, res) => {
  res.send("backend is working!");
});

//! step 3 (start server)
let PORT = 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log(`server is listening on port: ${PORT}`);
  }
});
