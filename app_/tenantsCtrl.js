app.controller("tenantsCtrl",function($scope, user, $location ){
    $scope.activeUser = user .getActivUser();


});

