
var app = angular.module("Homeowner-Association-Management-System", ["ngRoute"]);
// do route for app
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app_/home_/home.html"
    }).when("/login", {
        templateUrl: "app_/login/login.html",
        controller: "loginCtrl"
    }).when("/signup", {


    })
})