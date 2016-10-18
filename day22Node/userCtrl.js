var userList = require(',/userList.js');

module.exports = {
  login: function(req, res){
// for clarity this isnt necessary the code below:
  var username = req.body.username;

  // this is simulating in our html we had a form that had two input boxes that said user name and pasword and you click login, we would have something in angular set up that says ng submit to create a request that takies in username and password as an object of some sort that willl go to the service file and do an http api request as an object in our data key of the request. this is represented by req.body or in this example the req.username and req.body. now we are loo[ing through the ] known list of users an if the user supplied the username and password is equal to these (to the right of the username ==) then do something

  var password = req.body.password;
  var userFound = false;
  // until it finds a user it will return false
  // then we will loop through our user list and we are going to say if username
  for (var i = 0; i <userList.length; i++) {
    if(username == userList[i].username && password == userList[i].password) {
      userFound = true;
      // after adding session now we are going to activate it:
      req.session.currentUser = userList[i];
      // this is where a cookie is formed and a session has been started . this is where we set the session for the particular user
      req.session.cookie.maxAge = 1000 * 60 * 60 * 24;
      // we can set it to any number that we want in milliseconds it can be spread out like above to show that the 1000 is a second and 60 seconds and 60 miutes and 24 hours to mean all day. the length of session before it times out
      }
    }
    if (userFound) {
      res.send("User has been found. You may login");
    } else {
      res.send("Username or Password not found");
      // does the username and password match what you have on your userList
    }
  },
  logout: function (req, res){
    req.logout()
  }
};
