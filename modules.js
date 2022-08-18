function User() {
    var username, password;

    function doLogin(user, pw) {
        username = user;
        password = pw;

        // сделать остальную часть работы по логину
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

// создать экземпляр модуля `User`
var fred = User();
var alex = User()
var john = User()

alex.login(alex,123321)
fred.login("fred", "12Battery34!");