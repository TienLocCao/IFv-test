var express = require('express')
var bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();
var port = process.env.PORT || 8080;

console.log(process.env.DB_HOST);

const testRoute = require("./routes/test.route");

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
}); 


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port,function(){
  console.log("listening on port: ",port);
});
app.use("/test", testRoute);