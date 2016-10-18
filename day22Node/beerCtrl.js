module.exports = {
  // by using the code above it references and creates an entire object instead of writing it each time

  // keyname : function(){
  //   this keyname is a method in the object ex object oriented. create method any time and use the functions within. look at our index and look for opportunity to pull code out because they are full functions
  create: function(req, res){
    req.body.key = beerList[beerList.length - 1].key + 1;
    beerList.push(req.body);
  } ,
  read: function(req, res){
    res.send(beerList);
  },
  update: function(req, res){
    for (var i = 0; i < beerList.lenth; i++){
      if(beerList[i].key == req.params.id){
        beerList[i] = req.body;
      }
    }
    res.send(beerList);
  },
  delete: function(req, res) {
    for (var i = 0; i < beerList.length; i++) {
      if(beerList[i].key == req.params.id){
        beerList.splice(i,1);
      }
    }
    res.send(beerList);
  }
};
  now you can go into our index file and pull our entire post and pull functions and paste above
  now we have created an entire obkect with our crud functions inside of it to clean up the server
  }
};
