const mysql = require("mysql")
require("dotenv").config();
    'use strict';
   
    const databaseConnection = mysql.createConnection({
      host     : process.env.HOST,
      // port     : process.env.PORT,
      user     : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    });
    databaseConnection.connect(function(err) {
      if (err) throw err;
      console.log("Database Connected!");
    });
  
    module.exports = {databaseConnection}