const mariadb = require('mariadb');
require("dotenv").config();


const pool = mariadb.createPool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});


const connectToDataBase = async () => {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT 1 as val");
      console.log(rows); //[ {val: 1}, meta: ... ]
      const response = await conn.query("INSERT INTO user_storage value (?, ?,?,?,?,?,?,?)");
      console.log(response); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }
  console.log(connectToDataBase())