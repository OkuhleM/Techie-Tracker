// const mysql = require('mysql');
const mysql = require("mysql")
const {createPool } = require("mysql")
require("dotenv").config();


    const techieUserConnection = createPool({
      connectionLimit : 10,
      connectTimeout  : 60 * 60 * 1000,
      acquireTimeout  : 60 * 60 * 1000,
      timeout         : 60 * 60 * 1000,
      user            : process.env.USER,
      host            : process.env.HOST,
      database        : process.env.DATABASE,
      password        : process.env.PASSWORD,
      port            : process.env.PORT,
    });

  //  techieUserConnection.query(`select * from user_profile`, (err, result, fields)=>{
  //   if(err){
  //     return console.log(err)
  //   }
  //   return console.log(result)
  //  })
     
    module.exports =  {techieUserConnection} ;

