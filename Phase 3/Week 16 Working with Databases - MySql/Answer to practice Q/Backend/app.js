// ! step 1 (import modules)
require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

// ! step 2 (initialize express)
const app = express();

// ! step 4 (test the backend)
app.get("/test", (req, res) => {
  res.send("Backend is working!");
});

// ! step 5 (set up db connection)
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT,
});

// ! step 6 (set up db and user in phpMyAdmin)

// ! step 7 (connect with db)
db.connect((error) => {
  if (error) {
    console.error("mysql is not connected", error.message);
    return;
  }
  console.log("connected to mySQL database!");
});

// ! step 8 (create table)
app.get("/install", (req, res) => {
  let message = "Tables created!"

  let createProducts = `
        CREATE TABLE IF NOT EXISTS Products(
            product_id INT AUTO_INCREMENT,
            product_url VARCHAR(255) NOT NULL,
            product_name VARCHAR(255) NOT NULL,
            PRIMARY KEY (product_id)
        )
    `;

  let createProductDescription = `
        CREATE TABLE IF NOT EXISTS ProductDescription (
            description_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            product_brief_description TEXT NOT NULL,
            product_description TEXT NOT NULL,
            product_img VARCHAR(255) NOT NULL,
            product_link VARCHAR(255) NOT NULL,

            PRIMARY KEY (description_id),

            FOREIGN KEY (product_id)
            REFERENCES Products(product_id)
        )
    `;

  let createProductPrice = `
        CREATE TABLE IF NOT EXISTS ProductPrice (
            price_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            starting_price VARCHAR(255) NOT NULL,
            price_range VARCHAR(255) NOT NULL,
            PRIMARY KEY (price_id),

            FOREIGN KEY (product_id)
            REFERENCES Products(product_id)
        )
    `;

  db.query(createProducts, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Product Table created!");
    }
  });

  db.query(createProductDescription, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log("ProductDescription Table created!");
    }
  });

  db.query(createProductPrice, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log("ProductPrice Table created successfully!");
    }
  });

  res.send("message");
});

// ! step 9 (data insertion)
app.post("/addiphone", (req, res)=>{

})
// ! step 3 (create server)
app.listen(3000, () => {
  console.log("Server running: http://localhost:3000");
});

// db.query(products, (err) => {
//   if (err) {
//     console.log("Products error:", err);
//     return;
//   }
//   console.log("Products table created");

//   db.query(users, (err) => {
//     if (err) {
//       console.log("Users error:", err);
//       return;
//     }
//     console.log("Users table created");

//     db.query(product_description, (err) => {
//       if (err) {
//         console.log("Description error:", err);
//         return;
//       }

//       console.log("Product description table created");

//       db.query(product_price, (err) => {
//         if (err) {
//           console.log("Price error:", err);
//           return;
//         }
//         console.log("Product price table created");

//         db.query(orders, (err) => {
//           if (err) {
//             console.log("Orders error:", err);
//             return;
//           }
//           console.log("Orders table created");
//           // Send response
//           res.send("All tables created successfully!");
//         });
//       });
//     });
//   });
// });
