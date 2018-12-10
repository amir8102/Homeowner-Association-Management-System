
app.controller("loginCtrl", function($scope, $location, user) {
    
    $scope.email = "amirh312@gmail.com";
    $scope.pwd = "1234";

    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;

        user.login($scope.email, $scope.pwd).then(function() {
            // success login
            $location.path("/Homeowner")
        }, function(error) {
            // failed login
            $scope.invalidLogin = true;
        })
    }
});