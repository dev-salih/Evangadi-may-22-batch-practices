// firest initialise node
    // npm init
// install mysql, express and dotenv
    // npm i mysql2
    // npm i express
    // npm i dotenv


// if you want create database with in code

// const  express = require("express");
// const app = express();
// const mysql = require("mysql2");

// require('dotenv').config()



// const connection = mysql.createConnection({
//     // to access .env file install dotenv in `npm install dotenv --save `
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.PORT
// });

// const createDatabaseSQL = `CREATE DATABASE IF NOT EXISTS zele`;

// connection.connect((error) => {
//     if(error) {
//         console.error(error.message);
//     }
//     console.log("Connected to MySQL Database ");
// });

 // connection.query(createDatabaseSQL, (error) => {
    //     if(error){
    //         console.error("Database cration failed:", error.message);
    //         return;
    //     }
    //     console.log("Database Created Successfully.");
    // });



console.log("====Question 1====");
// Question 1:
//     import dependency
// const  express = require("express");
// const app = express();
// const mysql = require("mysql2");
// require('dotenv').config()


// const conn = mysql.createConnection({
//     // to access .env file install dotenv in `npm install dotenv --save `
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.PORT,
// });

// conn.connect((error) => {
//     if(error) {
//         console.log(error.message);
//     }
//     console.log("Connected to MySQL Database ");
// });





console.log("====Question 2 New====");

// Question 2 New


// const express = require("express");
// const app = express();

// require("dotenv").config();
// const mysql = require("mysql2");




// // Step 2
// // Connect to myDB

// const conn = mysql.createConnection({

//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     database: process.env.DB_NAME

// });



// conn.connect((err) => {

//     if (err) {

//         console.log("Connection error:", err);

//     } else {
//         console.log("Connected to MySQL Database");

//     }

// });

// // Excel design shows thes five table
// //     products;
// //     product_description;
// //     product_price;
// //     users;
// //     orders;


// //     The important rlationships are
// //             products
// //                |
// //                +---- product_description
// //                |
// //                +---- product_price
// //                |
// //                +---- orders <---- users

// // products ───────────────→ orders
// //    │                       ↑
// //    ├→ product_description  │
// //    └→ product_price        │
// //                            │
// // users ─────────────────────┘


// // products      => must exist first
// // users         => must exist first

// // description   => depends on products
// // price         => depends on products
// // orders        => depends on products + users

// // Create the products table

// // The Excel design:
//     // Product_id
//     // product_url
//     // product_name

// app.get("/install", (req, res) => {

//     let products = `
//         CREATE TABLE IF NOT EXISTS products (
//             product_id INT AUTO_INCREMENT,
//             product_url VARCHAR(255) NOT NULL,
//             product_name VARCHAR(255) NOT NULL,
//             PRIMARY KEY (product_id)
//         )
//     `;
//   //   // Create users
//   //   // The Excel design
//   //   // user_id
//   //   // User_name
//   //   // User_password
//   let users = `
//         CREATE TABLE IF NOT EXISTS users (
//             user_id INT AUTO_INCREMENT,
//             user_name VARCHAR(255) NOT NULL,
//             user_password VARCHAR(255) NOT NULL,
//             PRIMARY KEY (user_id)
//         )
//     `;

//   //   // Create product_description

//   //   // The Excel design
//   //   // Description_id
//   //   // Product_id
//   //   // Product_brief_description
//   //   // Product_description
//   //   // Product_img
//   //   // Product_link
//   let product_description = `
//         CREATE TABLE IF NOT EXISTS product_description (
//             description_id INT AUTO_INCREMENT,
//             product_id INT NOT NULL,
//             product_brief_description VARCHAR(255) NOT NULL,
//             product_description TEXT,
//             product_img VARCHAR(255),
//             product_link VARCHAR(255),

//             PRIMARY KEY (description_id),

//             FOREIGN KEY (product_id)
//             REFERENCES products(product_id)
//         )
//     `;
//   //   // The important part
//   //   // FOREIGN KEY (product_id)
//   //   // REFERENCES products(product_id)

//   //   // Create product_price

//   //   // From the Excel:
//   //   // Price_id
//   //   // Product_id
//   //   // Starting_price
//   //   // Price_range
//   let product_price = `
//         CREATE TABLE IF NOT EXISTS product_price (
//             price_id INT AUTO_INCREMENT,
//             product_id INT NOT NULL,
//             starting_price DECIMAL(10,2) NOT NULL,
//             price_range VARCHAR(255),
//             PRIMARY KEY (price_id),

//             FOREIGN KEY (product_id)
//             REFERENCES products(product_id)
//         )
//     `;
//   //   // Create orders

//   //   // The Excel design:
//   //   // order_id
//   //   // Product_id
// //   //   // user_id
//   let orders = `
//         CREATE TABLE IF NOT EXISTS orders (
//             order_id INT AUTO_INCREMENT,
//             product_id INT NOT NULL,
//             user_id INT NOT NULL,

//             PRIMARY KEY (order_id),

//             FOREIGN KEY (product_id)
//             REFERENCES products(product_id),

//             FOREIGN KEY (user_id)
//             REFERENCES users(user_id)
//         )
//     `;


// conn.query(products, (err) => {
//     if (err) {
//         console.log("Products error:", err);
//         return;
//     }
//     console.log("Products table created");

//         conn.query(users, (err) => {
//         if (err) {
//             console.log("Users error:", err);
//             return;
//         }
//             console.log("Users table created");

//     conn.query(product_description, (err) => {
//         if (err) {
//         console.log("Description error:", err);
//         return;
//         }

//         console.log("Product description table created");

//         conn.query(product_price, (err) => {
//         if (err) {
//             console.log("Price error:", err);
//             return;
//         }
//             console.log("Product price table created");

//             conn.query(orders, (err) => {
//             if (err) {
//                 console.log("Orders error:", err);
//                 return;
//             }
//             console.log("Orders table created");
//             // Send response
//             res.send("All tables created successfully!");
//           });
//         });
//       });
//     });
//   });
// });


// // Step 5
// // Start server

// app.listen(3000, () => {

//     console.log(
//         "Server running: http://localhost:3000"
//     );

// });




// conn.query(products, () => {
//     conn.query(users, () => {
//         conn.query(product_description, () => {
//             conn.query(product_price, () => {
//                 conn.query(orders, () => {
//                     // finished
//                 });
//             });
//         });
//     });
// });





 // Execute the query to create "Products" table
//   mysqlConnection.query(createProducts, (err, results, fields) => {
//     if (err) console.log(err); //log error if query fails
//   });


// Why do we create tables in this order?
    // We should create:

    // 1. products
    // 2. users
    // 3. product_description
    // 4. product_price
    // 5. orders

    // Why?

        // product_description
        //        |
        //        +---- needs products
        // product_price
        //        |
        //        +---- needs products
        // orders
        //    |
        //    +---- needs products
        //    |
        //    +---- needs users

// So this order would be wrong:

// orders
// products
// users

// because orders would try to reference tables that do not yet exist.



console.log("====Question 3====");





// we need install 
    // npm install body-parser 
    // npm install cors


// What is body-parser?
        // body-parser is an Express middleware package that reads data sent in an HTTP request body and converts it into a JavaScript object.

// The important word is:
        // parse
// Parse means:
    // Take data in one format and turn it into a format your program can easily understand.

// For example, a browser might send a form like this:
    // product_name=iPhone+16&product_url=https%3A%2F%2Fapple.com

// That is not very convenient to work with directly.

// body-parser turns it into something like:

// {
//     product_name: "iPhone 16",
//     product_url: "https://apple.com"
// }



// MysqlPractice/
// │
// ├── app.js
// ├── .env
// ├── package.json
// └── public/
//     └── index.html


// <form action="http://localhost:3000/add-product" method="POST">

        // When I submit this form
        //         ↓
        // send data to
        //         ↓
        // http://localhost:3000/add-product
        //         ↓
        // using POST


// Understand the name attribute

    // We have:
        // <input type="text" name="product_name" >
                // and:
        // <input type="text" name="product_url">

// The browser sends the names and values.

    // For example, 
        // Product Name:
        // iPhone 16
                // and:
        // Product URL:
        // https://www.apple.com/iphone/

    // The POST data looks like this 
        // product_name=iPhone 16
        // product_url=https://www.apple.com/iphone/



    // body-parser converts this into:

    // req.body

// which becomes:

    // {
    //     product_name: "iPhone 16",
    //     product_url: "https://www.apple.com/iphone/"
    // }

// That is why name="product_name" is important.




// What is CORS?
    // CORS 
        // Cross-Origin Resource Sharing
    // CORS controls whether a browser is allowed to make a request from one origin to another origin.

    // example:

        // Website A

        // http://localhost:5500
        // wants to communicate with:

        // Server B
        // http://localhost:3000

        // These are different origins.
        // The browser asks:

    // "Is localhost:5500 allowed to talk to localhost:3000?"




// Step 1
// Import modules

const express = require("express");
const app = express();

const mysql = require("mysql2");

const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

// app.use(cors());

// There are two parts to understand.
    // cors()
// This creates a CORS middleware function.
    // app.use()
// This tells Express:
    // "Use this middleware for incoming requests."

// app.use(cors());
    // means:
// Add CORS handling to my Express application.

app.use(cors());

// app.
    // is our express application
// app.use
    // registers middleware with express
// bodyParser
    // is the package that reads the request body

// What is urlencoded()
    // For example:
        // product_name=iPhone+16&product_url=https%3A%2F%2Fapple.com

        // The:
            // bodyParser.urlencoded(...)
        // middleware knows how to read that format.

        // It converts it into:
            // req.body
                // HTML form
                //     ↓
                // encoded form data
                //     ↓
                // body-parser
                //     ↓
                // req.body



app.use(bodyParser.urlencoded({
    // This is an option passed to urlencoded().
    // extended: false  
        // is for parsing simple form fields
    // extended: true
        // allow more complex/nested form data

            // Ex
        // <input name="user[name]">
        // <input name="user[email]">
    // The submitted data can look like:
        // user[name]=Zelalem&user[email]=test@gmail.com
    // With complex parsing enabled, you can get something like:

                // {
                //     user: {
                //         name: "Zelalem",
                //         email: "test@gmail.com"
                //     }
                // }

            // So:
                    // req.body.user.name
            // That is the kind of situation where:
                // extended: true
    extended: false
}));
// static
    // serves all of them as well as we have other file
app.use(express.static("public"));


// Step 3
// MySQL connection


const conn = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});

// Step 4
// Connect to MySQL


conn.connect((err) => {
    if (err) {
        console.log(
            "MySQL connection error:",
            err
        );
    } else {
        console.log(
            "Connected to MySQL Database"
        );
    }
});

// Step 5
// Add product route


app.post("/add-product", (req, res) => {

    // 
// What is req.body?
    // When a client sends data in the HTTP request body:

    // req.body
        // is where your Express route can access that parsed data.

    // example 
        // If the user submitted:
            // Product Name = iPhone 16
            // Product URL = https://apple.com/iphone/

    // we check in console 
        // app.post("/add-product", (req, res) => {
        //     console.log(req.body);
        // });

    // you might see:
        // {
        //     product_name: "iPhone 16",
        //     product_url: "https://apple.com/iphone/"
        // }
    
        // Then we check one by one 
            // req.body.product_name
                // iPhone 16

            // req.body.product_url
                // https://apple.com/iphone/

    const productName =
        req.body.product_name;

    const productUrl =
        req.body.product_url;
    // Check the form data
    if (!productName || !productUrl) {
        return res.send(
            "Please enter product name and product URL"
        );
    }
    // SQL query

    const sql = `
        INSERT INTO products
        (product_url, product_name)
        VALUES (?, ?)
    `;
    // Execute SQL query

    conn.query(
        sql,
        [productUrl, productName],
        (err, result) => {
            // Check for error
            if (err) {
                console.log(
                    "Insert error:",
                    err
                );
                return res.send(
                    "Error inserting product"
                );
            }
            // Success
            console.log(
                "Product inserted successfully"
            );
            console.log(
                "New product ID:",
                result.insertId
            );
            res.send(
                "Product added successfully!"
            );
        }
    );

});

// Step 6
// Start server


app.listen(3000, () => {

    console.log(
        "Server running: http://localhost:3000"
    );

});