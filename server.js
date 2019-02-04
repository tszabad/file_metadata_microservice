'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer  = require("multer");
var upload = multer({ dest: 'public/' });
var bodyParser = require("body-parser");

var app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) =>{
  res.json(req.upfile);
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
