
app.factory("messages", function($q, $http, user) {

    var messages = [];
    var wasEverLoaded = {};

    function Message(plainRecipe) {
        this.id = plainRecipe.id;
        this.name = plainRecipe.name;
        this.description = plainRecipe.description;
        // this.ingredients = plainRecipe.ingredients;
        // this.steps = plainRecipe.steps;
        // this.imgUrl = plainRecipe.imgUrl;
        // this.userId = plainRecipe.userId;
    }

    function getActiveUserMessages() {
        var async = $q.defer();

        var userId = user.getActiveUser().id;

        // This is a hack since we don't really have a persistant server.
        // So I want to get all recipes only once.
        if (wasEverLoaded[userId]) {
            async.resolve(recipes[userId]);
        } else {
            messages[userId] = [];
            var getRecipesURL = "http://my-json-server.typicode.com/nirch/recipe-book-v3/messages";
            // var getRecipesURL = "http://my-json-server.typicode.com/nirch/recipe-book-v3/recipes?userId=" + userId;
            $http.get(getRecipesURL).then(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    var message = new Message(response.data[i]);
                    messages[userId].push(message);
                }
                wasEverLoaded[userId] = true;
                async.resolve(messages[userId]);
            }, function(error) {
                async.reject(error);
            });
        }

        return async.promise;
    }


    function createRecipe(name, description, ingredients, steps, imgUrl) {
        var async = $q.defer();

        var userId = user.getActiveUser().id;

        var newRecipe = new Recipe({id:-1, name: name, description: description,
            ingredients: ingredients, steps: steps, imgUrl: imgUrl, 
            userId: userId});

        // if working with real server:
        //$http.post("http://my-json-server.typicode.com/nirch/recipe-book-v3/recipes", newRecipe).then.....

        recipes[userId].push(newRecipe);
        async.resolve(newRecipe);

        return async.promise;
    }


    return {
        getActiveUserMessages: getActiveUserMessages,
        createRecipe: createRecipe
    }
})