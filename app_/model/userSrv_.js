
app.factory("user", function($q, $http) {

    var activeUser = null;
    // new User( {
    //     "id": 1,
    //     "fname": "Amir",
    //     "lname": "Hayut",
    //     "email": "amir@amir.com",
    //     "pwd": "1234"
    // });

    function User(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
    }

    function login(email, pwd) {
        var async = $q.defer();
        debugger;
        var loginURL = "http://my-json-server.typicode.com/amir8102/Homeowner-Association-Management-System/users?email=" +
            email + "&pwd=" + pwd;
        $http.get(loginURL).then(function(response) {
            debugger;
            if (response.data.length > 0) {
                // success login
                activeUser = new User(response.data[0]);
                async.resolve(activeUser);
            } else {
                // invalid email or password
                async.reject("invalid email or password")
            }
        }, function(error) {
            async.reject(error);
        });

        return async.promise;
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function getActiveUser() {
        return activeUser;
    }

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveUser: getActiveUser
    }
})