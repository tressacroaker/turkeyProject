angular.module("beerApp")
.service("mainServ", function($http){
  this.getAllTheBeer = function() {
    return $http({
      method: "GET",
      url: "/beer"
    }).then(function(response){
      return response.data;
    });
  };

this.addNewBeer = function(anotherOne){
  return $http({
    method: "POST",
    url: "/beer",
    data: anotherOne
  }).then(function(response){
    return response;
  });
};
this.removeTheBeer = function(beerToRemove){
  return $http({
    method: "DELETE",
    url: "/beer/" + beerToRemove.key
  }).then(function(response){
    return response;
  });
};

this.changeTheBeer = function(beerToChange){
  return $http({
    method: "PUT",
    url: "/beer/" + beerToChange.key,
    data: beerToChange
  }).then(function(response){
    return response;
  });
};

});
