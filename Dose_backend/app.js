const express = require('express')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload');
const app = express()
const cors = require('cors');
const routes = require('./routes');
// const jwt = require("jsonwebtoken");

// server.listen(3000);
const port = 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(fileupload());
app.use(cors());
app.use('/', routes);
app.use("/img", express.static('./img'));
app.use("/", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With,token');

  next();
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});


module.exports = {
  app
}