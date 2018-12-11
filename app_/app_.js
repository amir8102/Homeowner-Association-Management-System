
var app = angular.module("Homeowner-Association-Management-System", ["ngRoute"]);
// do route for app
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app_/home_/home_.html"
    })
    .when("/login", {
        templateUrl: "app_/login/login_.html",
        controller: "loginCtrl"
    })
    .when("/dashboard", {
        templateUrl: "app_/dashboard/dashboard.html",
        controller: "dashboardCtrl"
    })


    
});