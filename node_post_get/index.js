var port = 5000;
var express = require('express');
var bodyParser = require('body-parser');
var server = express();
 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var DATA=[];



server.use(bodyParser.json());

//server.use(urlencodedParser)

server.use('/', express.static('public'));

server.get('/',urlencodedParser, (req, res) => {
    
    res.sendFile(__dirname + "/public/index.html");
    //console.log(DATA);
});





server.post('/', urlencodedParser, (req, res) => {
    DATA.push({text: req.body.text})
    res.sendFile(__dirname + "/public/index.html");
    
    
    console.log(req.body.text);
});



server.get('/index',urlencodedParser, (req, res) => {
    
    res.send(DATA); 
 
     
 });


server.listen(port, () => {
    console.log('Server runned on port:', port);
});