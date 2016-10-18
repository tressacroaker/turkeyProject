angular.module("beerApp")
.controller("mainCtrl", function($scope, mainServ){

$scope.getBeer = function(){
  mainServ.getAllTheBeer()
  .then(function(response){
    $scope.allTheBeers = response;
  })

};

// $scope.getBeer();

$scope.postNewBeer = function(nextBeer){
  mainServ.addNewBeer(nextBeer)
  .then(function(response){
    // if we do a get request we are going to get everything in our database, if we do any of the other crud functions it is only going to sendback that one thing not everything. so instead of setting our response to a certain value only type getBeer so that it refreshes our data with the updated information not just the single change
    $scope.newBeer.name = "";
    $scope.getBeer();
    })
};
    $scope.deleteTheBeer = function(beerToRemove){
      mainServ.removeTheBeer(beerToRemove)
      .then(function(response){
        $scope.getBeer();
      })
};

  $scope.putTheBeer = function(beerToPut){
    mainServ.changeTheBeer(beerToPut)
    .then(function(response){
      $scope.getBeer();
    })
  };

});
