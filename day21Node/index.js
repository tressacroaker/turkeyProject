var express = require('express');
// create a variable called express this can be changed to anything, set it equal to a method called require.
// You are requiring the actual package name in ('express'). express is a very indepth variant of JS.
// express will make your life easier, it is straightforward, and it slims down your code.

var bodyParser = require('body-parser');
// bodyparse translate all of your objects in your api requets into jason format. this is what node reads objects in
// when we are in our javascript and we tell it to do a post request with that javascritp as your data it is changing it to jason package. parses js objects into json format

// we havent told it to get anything yet

var cors = require('cors');
// sets headers for you automatically
// if we had done this is ajax on the front end it would show errors to instead we call in cors package

var app = express();
// app is standard and used for everything. next we will invoke the express variable by requiring express we assume it is the function that we want to run

// now we want to use the body parser package. use is to run anything that comes in as a request

var beerList = [{
  name:"Molson",
  key:1
}, {
  name:"Ballast Point Jalapeno scalpin",
  key:2
}, {
  name:"Bridger Mad Mile",
  key: 3
}, {
  name: "Harvest Moon",
  key: 4
}];


// middlewear that has to fall below the app variable and they are using the names of the packages that we designated:
app.use(cors()); //runs cors
app.use(bodyParser.json());
// parsing js objects into json type

// there is another body parser that is suggested called: urlencoded(
app.use(bodyParser.urlencoded());
// this is referencing the utf-8 that is in our html head tag
// this parses through specific utf character types into json format

app.use(express.static(__dirname + '/public'));
// dirname looks at the root directory. make sure index file is in the public folder becuase we are telling it to look there
// this runs life server on your index.html in the root directory in the public folder


// below are the endpoints:
// app.get('/beer', function (req, res, next){
//   next();
// }, function(req, res){
//
// });
// we need an endpoint for our get request, the first argument in our get request is the url to get beer. the url is an extension to our base url ex lancebarney.com so to get the beer list it would be lancebarney.com/beerlist
// there are three parameters in the call back function in this specific order
// creates object called req, or if we wanted to post data it would show us that, anything related to id
// res- creates a response, at the end of our endpoints we are going to send back to the front end, then we get a response back from the promise.
// last param: next - is when it automatically runs the next function after the first one, ex credit card example the first function validates the card is valid the second function checks the validity of the info on the card, third function could say to process the payment

app.get('/beer', function (req, res){
  res.send(beerList);
});
app.post('/beer', function(req, res){
  // console.log(req);
  req.body.key = beerList[beerList.length - 1].key + 1;
  // the minus sign in case we delete a beer from the list and then add to the last item value in the list
  beerList.push(req.body);
  // dont need the .beer if the array is actualy an object not string
  res.send(beerList);
});
// we want to push the new array like javascript does and its always in the body tag

// need to make sure that the array is in an id format with {} and key and name
app.put('/beer/:id', function(req, res){
  for (var i=0; i<beerList.length; i++) {
    if(beerList[i].key == req.params.id){
      beerList[i] = req.body;
    }
  }
  res.send(beerList);
});

app.delete('/beer/:id', function(req, res){
  for (var i=0; i<beerList.length; i++) {
    if(beerList[i].key == req.params.id){
      beerList.splice(i,1);
    }
  }
  res.send(beerList);
});

// /beer/plus what ever the id is it will look for that specific value nd compare that against the list of key values above. we want to replace the beer list index with the req.body

app.listen(7000, function() {
  console.log("listening to 7000");
});
// this is where we choose port numbers, 3000 to 9000 for developement. when live its on port 80
// then we will add a callback function as our second argument
// then you go back to your terminal and type nodemon
// then you can go to the web and type localhost: 7000 to see if it works
