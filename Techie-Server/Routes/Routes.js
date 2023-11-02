// const techieUserConnection = require("../DataBase/Server")
const {saveUserProfile, checkEmail, checkPassword} = require("../Queries/index")
const {confirmUserPassword } = require("../Security/Security")

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
// const { check, validationResult } = require("express-validator");
const path = require("path");
const { databaseConnection } = require("../DataBase/Server");
const { verify } = require("crypto");

require("dotenv").config({ dpath: path.resolve(__dirname, "../env") })

// const SecretKey = process.env.SECRETKEY;


const userRoutes = (app) =>{

  const verifyUser =(req,res,next)=>{

    const token = req.cookies.token;
    if(!token){
      return res.json({Message: "Token is needed Please provide it. Login now"})
    }else{
jwt.verify(token,process.env.SECRETKEY,(error,decoded)=>{
  if(error){
    return res.json({Message: "Authentication Failed!!!"})

  }else{
     req.name = decoded.name;
    next()
  }
})
    }
  }


app.get("/",verifyUser,(req,res)=>{
return res.json({Status: "Success", name: req.name})
})


app.post("/login", (req,res)=>{
  const {Email,password}=req.body
  const sql = 'SELECT * FROM user_profile WHERE Email=?';
  databaseConnection.query(sql,[Email],(err,data)=>{
    if(err) return res.json({Error: " Login failed"})
    if(data.length > 0){
     bcrypt.compare(password.toString(), data[0].password, (err, response)=>{
      if(err) return res.json({Error: " Password error"})
      if(response) {
        const name = data[0].name;
        console.log('name', name)
        const token = jwt.sign({name}, process.env.SECRETKEY, {expiresIn:"2h"})
        res.cookie("token", token)
        return res.json({Status: "Success"})
      }else{
        return res.json({Error: "Password does not match"})
      }

     })
    }else{
      return  res.json({error:"no email exists"})
    }
  })
})


   }
module.exports = { userRoutes };