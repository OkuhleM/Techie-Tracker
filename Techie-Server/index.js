require("dotenv").config()

const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require('body-parser');

const {authenticateUser} = require("./Middleware/authentication")

const { userRoutes } = require("./Routes/Routes");
const { configDotenv } = require("dotenv");
const { techieUserConnection } = require("./DataBase/Server");


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));

authenticateUser(app)
userRoutes(app)

app.get('/', function (req, res) {
  res.send('Server listening on this port'); // This will serve your request to '/'.
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});


module.exports = app