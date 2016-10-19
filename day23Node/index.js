//requireing a package

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//setting other variables, where you can also add a controller later
// involing is specific to running that express, we are setting that variable throughout the entire thing to use
var animalCtrl = require('./controllers/animalCtrl')
var app = express();

//where all the middlewear goes
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));



//end points
app.get("/animals", animalCtrl.read);
//then you go up to the variable section and you create the variable for animalCtrl
app.post("/animals", animalCtrl.create);
app.put("/animals/:id", animalCtrl.update);
app.delete('/animals/:id', animalCtrl.delete);

//listen
app.listen(8000, function(){
  console.log("canis lupis is listening to 8000");
});
