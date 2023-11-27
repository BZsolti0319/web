let user = {};
user.firstName= "John";
user.lastName= "Smith";
user.firstName = "Paul";
delete user.firstName;

function printFullName() {
    console.log(user.firstName + " " + user.lastName + " ");
}

printFullName();
