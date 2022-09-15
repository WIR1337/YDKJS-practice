function User(firstName,lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.Hi = () => {console.log(`Hello everyone , my name is ${firstName} ${lastName}`)}
}

let kate = new User('Kate','Nab')

kate.Hi()