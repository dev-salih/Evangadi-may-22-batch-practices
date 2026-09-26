// step 1 (import modules)
const express = require("express");
const mysql = require("mysql2");

// step 2 (initialize express)
let app = express();

// step 4 (set up db connection)
let myDBconnection = mysql.createConnection({
  user: "crudpracticeuser",
  password: "crudpracticeuser@1234",
  host: "localhost",
  database: "crudpracticeDB",
});

// step 5 (set up db and user in phpMyAdmin)

// step 6 (connect with db)
// myDBconnection.connect((err)=>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("db connected successfully")
//     }
//   }
// )

// step 3 (create server)
// let PORT = 4678;
// app.listen(PORT, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`server is listening to port ${PORT}`);
//   }
// });

// ! better way of db and server connection (step 6 & 3 combined)
async function startServer() {
  try {
    myDBconnection.connect((err) => {
      if (err) {
        console.log(`database connection error: ${err}`);
        return;
      } else {
        console.log("Database connected successfully");
        let PORT = 4678;
        app.listen(PORT, () => {
          console.log(`server is listening on localhost: ${PORT}`);
        });
      }
    });
  } catch (err) {
    console.log("failed to connect to database", err);
  }
}
startServer();
