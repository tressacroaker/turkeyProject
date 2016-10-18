var express = require ('express');
// making the enstire srver experience easier, we can simply run this
var bodyParser = require('body-parser');
// parses into json format
var cors = require ('cors');
// gets rid of the headers
// adding new package below for sessions
var session = require('express-session');


var beerCtrl = require('./beerCtrl.js');
var beerList = require('./beerList.js');
// making another file that the beerList can reference
var userCtrl = require('./userList.js');

var config = require('./config.js')

var app = express();
// we are runnign express by invoking it and we are setting it equal to the app variable
// each of the use lines below telling express to use these packages
app.use(cors()); //used to run header style
app.use(bodyParser.json()); //take ny normal object in an api request and convert to json format
app.use(bodyParser.urlencoded()); //if we set our code in html to be of a certain type like utf-8, then it will also convert this specfici type to json format

app.use(session(config));
// we create an object ex secret with the key value monkey
// sometimes in the future you dont want people knowing your secret so go above to the var config.
// to keep it hidden go to the .gitignore and type config.js under the node_modules
// these only means that we are runnign session we ahvent created functionality yet. the real area where we get the power of sessions is when we go to the userCtrl and we tell it that we have a user to work with finally

app.use(express.static(__dirname + '/public')); //when we run nodemon it goes to packaag ejson and tesll to run index.js file, it automatically knows to run the index.js file we also want it to know to run live server on our. it goes to the root directory of this folder with dirname and goes to the public folder and it goes to the index.html file and runs it


//crud functions go here
app.post('/beer',beerCtrl.create);
app.get('/beer', beerCtrl.read);
app.put('/beer/:id', beerCtrl.update);
app.delete('/beer/:id', beerCtrl.delete);

// app.post('/login', userCtrl.login);
//
// app.post('/login', function(){
//
// })


app.listen(8000, function(){
  console.log("aliens are watching on 8000");
})
