const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const path = require("path");
require("dotenv").config({ dpath: path.resolve(__dirname, "../env") });

const { userPassword} = require("../Security/Security")

const { saveUserProfile, 
        checkEmail, 
        checkPassword, 
    } = require("../Queries/index");
const { techieUserConnection } = require("../DataBase/Server");


const authenticateUser = (app) => {
    app.post('/register', [ check("Email").isEmail(),
check("password").isLength({
    min:8,
}),

],
async (req,res) => {

    const {
      UserID, Name, Surname, Email, password, confirmPassword, RegisteredAt, Intro
    } = req.body


    let errors = validationResult(req)
    const confirmEmail = await checkEmail(Email);
      const passwordThatHasBeenEncrypted = await userPassword(password);
   
      try {
        const users = {
          UserID,
          Name,
          Surname,
          Email,
          password: passwordThatHasBeenEncrypted,
          confirmPassword: passwordThatHasBeenEncrypted,
          Intro,
          RegisteredAt
        };

        // if (!errors.not().isEmpty()) {
        //     const errorMessage = { message: "could not create account" };
        //     console.log('error in detail', errors)
        //     return res.send(errorMessage).status(5001);}
           if ({confirmEmail}.length > 0) {
            return res.send({ message: "Email already exist" }).status(501);
          } else if (confirmPassword !== password) {
            return res.send({ message: "Password does not match" }).status(501);
          }
          
          
          const token = jwt.sign({ payload: Email }, process.env.SECRETKEY, {
              expiresIn: "2h",
            }); 
            
        const data = await saveUserProfile(users);
        return res.send({data,token}).status(200);
        }


catch (error) {
    console.log(error)
    res.sendStatus(500).send(error)
}
}
)


}

module.exports = { authenticateUser }