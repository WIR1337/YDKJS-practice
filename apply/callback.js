var clientData = {
    id: 094545,
    fullName: "Not Set",
    setUserName: function (firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
}

clientData.setUserName('Alex', 'Nab')

console.log(clientData.fullName)
function getUserInput(firstName, lastName, callback, callbackObj) {
    callback.apply(callbackObj, [firstName, lastName]);
}

getUserInput("Barack", "Obama", clientData.setUserName, clientData);

console.log(clientData.fullName); // Barack Obama