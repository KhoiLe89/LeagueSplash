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
    HomeControllerFunction
  ])
  .controller("SkinController", [
    SkinControllerFunction
  ])
  .controller("SpotlightController", [
    SpotlightControllerFunction
  ])

function HomeControllerFunction() {
  console.log("Im using the Home Controller!")
}
function SkinControllerFunction(){
  console.log("I'm using the SKIN controller")
}
function SpotlightControllerFunction(){
  console.log("I'm using the SPOTLIGHT controller")
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
