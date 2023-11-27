let user = {};
user.firstName = "John";
user.lastName = "Smith";
user.firstName = "Paul";
delete user.firstName;

function printFullName() {
    console.log(user.firstName + " " + user.lastName + " ");
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

console.log(isEmpty({}));
console.log(isEmpty({ name: "John" }));

printFullName();