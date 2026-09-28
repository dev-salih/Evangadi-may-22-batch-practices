// step 1(import modules)
const express = require("express");
const mysql = require("mysql2");

// step 2 (initialize express)
let app = express();

// step 5 (set up database connection)
let myDBconnection = mysql.createConnection({
  host: "localhost",
  user: "salih",
  password: "crudSelfPractice@1234",
  database: "crudSelfDB",
  port: 8889
});

// step 6 (set up db and user in phpadmin)


// step 7 ()
myDBconnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db connected successfully");
  }
});

// step 4 (test backend)
app.get("/test", (req, res) => {
  res.send("backend is working!");
});

// step 3 (start server)
let PORT = 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log(`server is listening on port: ${PORT}`);
  }
});
