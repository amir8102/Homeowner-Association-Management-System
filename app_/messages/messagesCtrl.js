app.controller("messagesCtrl", function($scope, $location, user, messages) {
    
    messages.getActiveUserMessages().then(function (messages){
        $scope.messages = messages;
    
    },function(error){
    
    })
});