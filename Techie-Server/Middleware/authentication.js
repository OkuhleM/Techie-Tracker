const { check } = require("express-validator");
const jwt = require("jsonwebtoken");
const path = require("path");
const { userPassword} = require("../Security/Security")

require("dotenv").config({ dpath: path.resolve(__dirname, "../env") });

const { saveUserProfile, checkEmail } = require("../Queries/index");
const { databaseConnection } = require("../DataBase/Server");

const authenticateUser = (app) => {
    app.post('/register', [ check("Email").isEmail(),
check("password").isLength({
    min:8,
}),

], 
async (req,res) => {

    const {
      UserID, Name, Surname, Username, Email, password, confirmPassword, RegisteredAt, Intro
    } = req.body

    const confirmEmail = await checkEmail(Email);
      const passwordThatHasBeenEncrypted = await userPassword(password);
      try {
        const users = {
          UserID,
          Name,
          Surname,
          Username,
          Email,
          password: passwordThatHasBeenEncrypted,
          confirmPassword: passwordThatHasBeenEncrypted,
          Intro,
          RegisteredAt
        };
       
           if ({confirmEmail}.length > 0) {
             res.send({ message: "Email already exist" }).status(501);
          }
          else if (confirmPassword !== password) {
             res.send({ message: "Password does not match" }).status(501);
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

app.get("/retrievedata", (req, res) => {
  let sql = "SELECT * FROM user_profile";
  
  databaseConnection.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(result);
  });
});




}

module.exports = { authenticateUser }