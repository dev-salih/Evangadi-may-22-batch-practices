// step 1(import modules)
const express = require("express");
const mysql = require("mysql2");

// step 2 (initialize express)
let app = express();

// step 4 (test backend)
app.get("/test", (req, res)=>{
    res.send("backend is working!");
})

// step 3 (start server)
let PORT = 3000;
app.listen(PORT, (err)=>{
  if (err) {
    console.log("err");
  } else {
    console.log(`server is listening on port: ${PORT}`)
  }
})
