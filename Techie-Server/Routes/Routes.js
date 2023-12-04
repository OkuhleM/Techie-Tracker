// const techieUserConnection = require("../DataBase/Server")
const {saveUserProfile, checkEmail, checkPassword} = require("../Queries/index")
const {confirmUserPassword } = require("../Security/Security")
const {modifyData} = require("../Queries/ModifyData")

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
// const { check, validationResult } = require("express-validator");
const path = require("path");
const { databaseConnection } = require("../DataBase/Server");
const { verify } = require("jsonwebtoken");

require("dotenv").config({ dpath: path.resolve(__dirname, "../env") })

// const SecretKey = process.env.SECRETKEY;


const userRoutes = (app) =>{

const verifyUser = (req,res,next) => {
  const accessToken = req.cookies.token
  console.log('accessToken', accessToken)
  if (!accessToken) return res.json({ error: "User not logged in!" });

  try {
    const validToken = verify(accessToken, process.env.SECRETKEY);
    console.log('validToken', validToken)
    req.user = validToken;
    if (validToken) {
      console.log('validToken', validToken)
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
}

app.get("/auth",verifyUser,(req,res)=>{
return res.json({Status: "Success", name: req.user})
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
      return  res.json({error:"Account Does not exist exists"})
    }
  })
})

app.get("/get_allBooks", async (req, res) => {
  try {
    const allBooks = await getAllBooks();
    res.send(allBooks).status(201);
  } catch (error) {}
});

app.put("/modifydata/:UserID", async (req, res) => {
  const {UserID} = req.params
  const {Name,Surname,Email,Intro} = req.body
  try {
    const findUser = await modifyData({Name,Surname,Email,Intro},UserID);
    console.log("findUser", findUser);
    res.send(findUser).status(200);
  } catch (error) {
    console.log(error);
    res.send(404);
  }
});


   }
module.exports = { userRoutes };