// const techieUserConnection = require("../DataBase/Server")
const {saveUserProfile, checkEmail, checkPassword} = require("../Queries/index")
const {confirmUserPassword } = require("../Security/Security")

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const { check, validationResult } = require("express-validator");
const path = require("path");

require("dotenv").config({ dpath: path.resolve(__dirname, "../env") })

const SecretKey = process.env.SECRETKEY;


const userRoutes = (app) =>{
   app.post("/login", async (req,res) => {
    const { Email, password} = req.body

    try {
      const currentEmail = await checkEmail(Email)
      // const currentPassword = await checkPassword(password)
      
      if( currentEmail.length == 0) {
        console.log('currentEmail', currentEmail)
        res.send({message: "Email does not exist", currentEmail}).status(401)
      }
      else if(currentEmail[0].password) {
        const hashedPassword = currentEmail[0].password;
        const matchPassword = await confirmUserPassword(password, hashedPassword);
        console.log("mySecretKey", SecretKey);
        matchPassword;
      }

      const token = jwt.sign({ payload: Email }, SecretKey, {
        expiresIn: "2h",
      });
      console.log("token", token);
      const data = await saveUserProfile(req.body);

      return res.send({ message: "sucessfully Logged on"},data,token).status(200);

    }
   

    catch (error) {
      console.log(error)
      res.sendStatus(401)
    }
})

   }
module.exports = { userRoutes };