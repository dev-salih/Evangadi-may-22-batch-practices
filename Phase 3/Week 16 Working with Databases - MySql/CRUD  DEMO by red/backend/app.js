// ! step 1 (import modules)
const express = require("express");
const mysql = require("mysql2");

// ! step 2 (initialize express)
let app = express();

// ! Middleware ()
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ! step 5 (set up db connection)
let myDBconnection = mysql.createConnection({
  user: "crudpracticeuser",
  password: "crudpracticeuser@1234",
  host: "localhost",
  database: "crudpracticeDB",
});

// ! step 6 (set up db and user in phpMyAdmin)

// ! step 7 (connect with db)
myDBconnection.connect((err)=>{
    if (err) {
      console.log(err);
    } else {
      console.log("db connected successfully")
    }
  }
)

// ! step 3 (create server)

// let PORT = 4678;
// app.listen(PORT, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`server is listening to port ${PORT}`);
//   }
// });

// ! step 4
app.get("/test",(req, res)=>{
  res.send("backend is working");
})

//! step 8 (create table)
app.get("/createTable", (req,res)=>{
  let tableSchema = `CREATE TABLE if not exists userinfo(
  user_id int auto_increment,
  user_first_name varchar(255) null,
  user_last_name varchar(255) null,
  user_email varchar(255) null,
  user_batch varchar(255) null,
  user_group varchar(255) null,
  user_course varchar(255) null,
  PRIMARY KEY(user_id)
  )`;

  myDBconnection.query(tableSchema, (err, data, field)=>{
    // ! err: if there is any error while executing.. display
    // ! data: if there is any incoming data from db
    // ! field: any additional data about the incoming data 

    if (err) {
      console.log(err)
    } else {
      res.send("Table created successfully");
    }
  });
});


//! step 9 (data insertion)

app.post("/createUser", (req, res)=>{

  const {firstName, lastName, email, batch, group, course} = req.body;

  let inserQuery = `INSERT INTO userInfo(
  user_first_name,
  user_last_name,
  user_email,
  user_batch,
  user_group,
  user_course
  )
  VALUES (?, ?, ?, ?, ?, ?) 
  `;

  myDBconnection.query(inserQuery, [firstName, lastName, email, batch, group, course], (err, data, field)=>{
    if (err) {
      console.log(err);
    } else {
      console.log("data inserted successfully")
      res.send("data inserted successfully");
    }
  });
});


//! step 10 (select OR getting user data)

app.get("/getUserData", (req, res)=>{
  let getAllUserQuery = 'SELECT * FROM userInfo';

  myDBconnection.query(getAllUserQuery, (err, data, field)=>{
    if (err) {
      console.log(err);
    } else {
      console.log("user info data is being aquired!");
      res.send(data);
    }
  });
})

// if you want to select in ASC or DESC: 'SELECT * FROM userInfo ORDER BY id ASC/DESC', 
// if you want to select specific data: 'SELECT * FROM userInfo WHERE user_id = ?'

//! step 11 (update single data)

app.patch("/user/:user_id", (req,res)=>{
  const { user_id } = req.params;
  const { user_group } = req.body;
  let updateQuery = `
  UPDATE userInfo
  SET user_group = ?
  WHERE user_id = ?
  `;

  myDBconnection.query(
    updateQuery,
    [user_group, user_id],
    (err, data, field) => {
      if (err) {
        console.log(err);
      } else {
        console.log("user info updated!");
        res.send("user info updated!");
      }
    },
  );

});

//! step 12 (delete user data)

app.delete("/user/:user_id", (req, res)=>{
  const { user_id } = req.params;
  let deleteQuery = `DELETE FROM userInfo WHERE user_id = ?`;

  myDBconnection.query(deleteQuery, [user_id], (err, data, field)=>{
    if (err) {
      console.log(err);
    } else {
      console.log("user data deleted");
      res.send("user data deleted!");
    }
  });
});

// ! better way of db and server connection (step 6 & 3 combined)
async function startServer() {
  try {
    myDBconnection.connect((err) => {
      if (err) {
        console.log(`database connection error: ${err}`);
        return;
      } else {
        console.log("Database connected successfully");
        let PORT = 8991;
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
