angular.module("customDirs")
.directive("mainDir", function(){
  return {
    // template:"<h1>Hello Everybody"</h1>,
    // use a template to use our html
    // or below you can call in a url if we have that file already made
    templateUrl: "mainDir.html"
    controller: "mainCtrl",
    restirct: "AE"
    // telling it how you want it to act
    // div is an element and a tag, if inside that dic we wanted to have a class that class is an attribute, we wither want our directive to be an entire element like div is or we want it to be set to class and let it see everything as a div and can modicfy that div
  }

});
