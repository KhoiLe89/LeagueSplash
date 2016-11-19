angular
  .module("LegendsSplashApp", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .controller("HomeController", [
    "HomeFactory",
    HomeControllerFunction
  ])
  .controller("SkinController", [
    SkinControllerFunction
  ])
  .controller("SpotlightController", [
    SpotlightControllerFunction
  ])
  .factory("HomeFactory", [
    "$resource",
    HomeFactoryFunction
  ])
function Skin(){
  this.skinss = ''
}
function HomeControllerFunction(HomeFactory) {
  // this.colors = ["orange", "blue", "green"]
  this.skins = HomeFactory.query((skins) => {
    console.log(skins)
  })


    // skins.$save();
// i need to be able access each object and  to print out only the names
// the return data is an object with keys as "Jax" and value as objects. JSON file but values as objects
  console.log("Im using the Home Controller!")
}
function SkinControllerFunction(){
  console.log("I'm using the SKIN controller")
}
function SpotlightControllerFunction(){
  console.log("I'm using the SPOTLIGHT controller")
}
function HomeFactoryFunction($resource) {
// this is the champ by id, no images
return $resource("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=RGAPI-fad0a8b6-b0e0-4393-b52f-136a9ee42cdc", {}, {
  query: {
    method: "GET",
    params: {},
    isArray: true,
    transformResponse: function(data, header){
      var jsonData = JSON.parse(data)
      var skins = []
      angular.forEach(jsonData, function(item) {
        var skin = new Skin();
        skin.skinss= item
        skins.push(skin)
      })
    return skins;
    }
  }
})
  // return $resource("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/<CHAMPION-ID>?champData=image&api_key=<API-KEY>")
  console.log("Home Factory being used")
}
function Router($stateProvider) {
  $stateProvider
  .state("home", {
    url: "/home",
    controller: "HomeController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/home.html"
  })
  .state("skin", {
    url: "/skin",
    controller: "SkinController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/skin.html"
  })
  .state("spotlight", {
    url: "/spotlight",
    controller: "SpotlightController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/spotlight.html"
  })
}
