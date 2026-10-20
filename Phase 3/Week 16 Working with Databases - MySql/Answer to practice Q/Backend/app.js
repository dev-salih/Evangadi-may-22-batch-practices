// ! step 1 (import modules)
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors"); 
require("dotenv").config();

// ! step 2 (initialize express)
const app = express();

// ! step 13 (use cors)
app.use(cors());
// const corsOption = {
//   origin: [
//     "http://localhost:3000",
//     "https://www.evangadi.com",
//     "http://www.apple.com",
//   ],
// };

// ! step 10 (middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    console.log("mysql is not connected", error.message);
    return;
  } else {
    console.log("connected to mySQL database!");
  }
});

// ! step 8 (create table)
app.get("/install", (req, res) => {
  let message = "Tables created!";

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
    if (err) console.log(err);
  });

  db.query(createProductDescription, (err, result, fields) => {
    if (err) console.log(err);
  });

  db.query(createProductPrice, (err, result, fields) => {
    if (err) console.log(err);
  });

  res.send(message);
  console.log(message);
});

// ! step 9 (data insertion)
app.post("/addiphones", (req, res) => {
  // console.log(req.body);
  const {
    product_name,
    product_url,
    product_brief_description,
    product_description,
    product_img,
    product_link,
    starting_price,
    price_range,
  } = req.body;

  const sqlAddToProducts =
    "INSERT INTO Products (product_url, product_name) VALUES (?, ?)";

  const sqlAddToDescription =
    "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES (?, ?, ?, ?, ?)";

  const sqlAddToPrice =
    "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)";

  // Step 1: Insert the product
  db.query(sqlAddToProducts, [product_url, product_name], (err, result) => {
    if (err) {
      console.error("Error inserting product:", err.message);
      return res.status(500).send("Error inserting product");
    }

    // Step 2: Get the inserted product ID
    const productId = result.insertId;

    // Step 3: Insert the product description
    db.query(
      sqlAddToDescription,
      [
        productId,
        product_brief_description,
        product_description,
        product_img,
        product_link,
      ],
      (err, result, fields) => {
        if (err) {
          console.error("Error inserting description:", err.message);
          return res.status(500).send("Error inserting product description");
        }

        // Step 4: Insert the product price
        db.query(
          sqlAddToPrice,
          [productId, starting_price, price_range],
          (err, result, fields) => {
            if (err) {
              console.error("Error inserting price:", err.message);
              return res.status(500).send("Error inserting product price");
            }

            // Step 5: Send success response
            return res.send("All records inserted successfully!");
          },
        );
      },
    );
  });
});

// ! step 11 (select/Read All data)
app.get("/iphone", (req, res) => {
  db.query(
    `SELECT * FROM Products p INNER JOIN ProductDescription d ON p.product_id = d.product_id INNER JOIN ProductPrice r ON p.product_id = r.product_id;`,
    (err, rows) => {
      if (!err) res.json({ products: rows });
      else console.log(err);
    },
  );
});

// ! 0R
// app.get("/iphones", (req, res) => {
//   db.query(
//     "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
//     (err, rows, fields) => {
//       let iphones = { products: [] };
//       iphones.products = rows;
//       var stringIphones = JSON.stringify(iphones);
//       if (!err) res.end(stringIphones);
//       else console.log(err);
//     },
//   );
// });

// ! step 12 (select/Read single product)
// app.get("/iphones/:product_id", (req, res) => {
//   const productID = req.params.product_id;
//   // console.log(productID);

//   db.query(
//     `SELECT * FROM Products JOIN ProductDescription ON Products.product_id = ProductDescription.product_id JOIN ProductPrice ON Products.product_id = ProductPrice.product_id WHERE Products.product_id = ${productID}`,

//     (err, rows) => {
//       if (!err) res.json({ products: rows });
//       else console.log(err);
//     },
//   );
// });

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

// [
//   product_name,
//   product_url,
//   product_brief_description,
//   product_description,
//   product_img,
//   product_link,
//   starting_price,
//   price_range,
// ];
