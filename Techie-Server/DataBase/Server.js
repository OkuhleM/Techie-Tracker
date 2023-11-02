const mysql = require("mysql")
require("dotenv").config();
    'use strict';
   
    const databaseConnection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'L!nd0kuhle@22',
      database : 'user_storage'
    });
    databaseConnection.connect(function(err) {
      if (err) throw err;
      console.log("Database Connected!");
    });
  
    module.exports = {databaseConnection}