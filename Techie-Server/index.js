require("dotenv").config()

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const {authenticateUser} = require("./Middleware/authentication")

const { userRoutes } = require("./Routes/Routes");
const { careerGoals } = require("./Middleware/careerGoals");

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());
app.use(bodyParser.json())
app.use(cors(
  {
    origin:["http://localhost:3001"],
    methods: ["POST","GET"],
    credentials: true
  }
));

app.use(cookieParser())

authenticateUser(app)
userRoutes(app)
careerGoals(app)

app.get('/', function (req, res) {
  res.send('Server listening on this port'); // This will serve your request to '/'.
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});


module.exports = app