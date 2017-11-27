// console.log("Hello");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post("/register", function(req, res) {
  res.send({
    message: `Hello! ${req.body.email} welcome to our api!` 
  });
});

var port = process.env.PORT || 8081;
app.listen(port);
console.log("Magic happens on port " + 8081);
