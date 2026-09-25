require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT,
});

db.connect((error) => {
  if (error) {
    console.error("mysql is is not connected", error.message);
    return;
  }
  console.log("connected to mySQL database");
});

// Q - 2;

app.get("/install", (req, res) => {
  let products = `
        CREATE TABLE IF NOT EXISTS products (
            product_id INT AUTO_INCREMENT,
            product_url VARCHAR(255) NOT NULL,
            product_name VARCHAR(255) NOT NULL,
            PRIMARY KEY (product_id)
        )
    `;

  let users = `
        CREATE TABLE IF NOT EXISTS users (
            user_id INT AUTO_INCREMENT,
            user_name VARCHAR(255) NOT NULL,
            user_password VARCHAR(255) NOT NULL,
            PRIMARY KEY (user_id)
        )
    `;

  let product_description = `
        CREATE TABLE IF NOT EXISTS product_description (
            description_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            product_brief_description VARCHAR(255) NOT NULL,
            product_description TEXT,
            product_img VARCHAR(255),
            product_link VARCHAR(255),

            PRIMARY KEY (description_id),

            FOREIGN KEY (product_id)
            REFERENCES products(product_id)
        )
    `;

  let product_price = `
        CREATE TABLE IF NOT EXISTS product_price (
            price_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            starting_price DECIMAL(10,2) NOT NULL,
            price_range VARCHAR(255),
            PRIMARY KEY (price_id),

            FOREIGN KEY (product_id)
            REFERENCES products(product_id)
        )
    `;

  let orders = `
        CREATE TABLE IF NOT EXISTS orders (
            order_id INT AUTO_INCREMENT,
            product_id INT NOT NULL,
            user_id INT NOT NULL,

            PRIMARY KEY (order_id),

            FOREIGN KEY (product_id)
            REFERENCES products(product_id),

            FOREIGN KEY (user_id)
            REFERENCES users(user_id)
        )
    `;

  db.query(products, (err) => {
    if (err) {
      console.log("Products error:", err);
      return;
    }
    console.log("Products table created");

    db.query(users, (err) => {
      if (err) {
        console.log("Users error:", err);
        return;
      }
      console.log("Users table created");

      db.query(product_description, (err) => {
        if (err) {
          console.log("Description error:", err);
          return;
        }

        console.log("Product description table created");

        db.query(product_price, (err) => {
          if (err) {
            console.log("Price error:", err);
            return;
          }
          console.log("Product price table created");

          db.query(orders, (err) => {
            if (err) {
              console.log("Orders error:", err);
              return;
            }
            console.log("Orders table created");
            // Send response
            res.send("All tables created successfully!");
          });
        });
      });
    });
  });
});

// Step 5
// Start server

app.listen(3000, () => {
  console.log("Server running: http://localhost:3000");
});

// db.query(products, () => {
//     db.query(users, () => {
//         db.query(product_description, () => {
//             db.query(product_price, () => {
//                 db.query(orders, () => {
//                     // finished
//                 });
//             });
//         });
//     });
// });
