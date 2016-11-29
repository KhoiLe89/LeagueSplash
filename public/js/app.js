angular
  .module("leagueSplash", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("SkinFactory", [
    "$resource",
    SkinFactoryFunction
  ])
  .controller("indexCtrl", [
    "Champion",
    "Skin",
    "$state",
    indexController
  ])

function Router ($stateProvider) {
  $stateProvider
    .state("index", {
      url: "/test",
      templateUrl: "/assets/ng-views/index.html",
      controller: "indexCtrl",
      controllerAs: "vm"
    })
}
function CandidateFactory($resource) {
  return $resource("/api/champions/:name", {}, {   //this is from the express side?
    update: {method: "put"}
  })
}
function indexController (Champion, Skin, $state){
  Champion
  .query() //get all the data from the /api/candidates
  .$promise // angular was written before "then"  so we just need $promise
  .then(champions => this.champions = champions)
}
