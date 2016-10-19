var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectId;
// this means that in the node package there are many keys going on so we want to reference that one specific object int he data package

var db = mongojs('animals', ['animals']);
//in the [] this is where you name the collections within your folder in robo mongo where you want to have multiple lists within the same database ex animals and beer
//we have structed our controller to be able to push things into your database now we want to tell it what to do, so below thi sis where you add the req and res as params in the funcntion. and reference which collection you want to use in the line below with dc.animals.find


module.exports = {
  read: function(req, res){
    db.animals.find({}, function(err, result) {
      if(err){
        res.send(err); //truthy falsey type statement
      } else {
        res.send(result);
      }
    });
      // we want to go into this database and return everything that is within that database.
      // first argument is a query bracket, the second is a function where we will be getting into some error handeling. inside the function give it two params being error and result. then put some logic in it
    //*this is the core of the read: db.animals.find({}
  },
  create: function(req, res){
    db.animals.insert(req.body, function(err, result) {
      if(err){
        res.send(err); //truthy falsey type statement
      } else {
        res.send(result);
      }
    });
    //because we are posting not finding we need to have insert. it is the method that is used in the mongojs package
    // first param referenceing what we are putting into the body so put req.body
  },
  update: function(req, res){
    var newObj = {
      query: {_id: ObjectId(req.params.id)},
      // this is where we will reference the id
      update: {$set: req.body},
      new: false
      // here we created a new variable inside the function but above the meat of the function
  };
    db.animals.findAndModify(newObj, function(err, result) {
      if(err){
        res.send(err); //truthy falsey type statement
      } else {
        res.send(result);
      }
    });
  },
  delete: function(req, res){
    db.animals.remove({_id: ObjectId(req.params.id)}, function(err, result) {
      if(err){
        res.send(err); //truthy falsey type statement
      } else {
        res.send(result);
      }
    });
  }

};
