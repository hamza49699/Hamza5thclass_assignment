//camelCase
var myName = "hamzaJaved";
//snake_case
var my_name = "hamza_javed";
//PascalCase
var MyName = "HamzaJaved";
console.log(myName, my_name, MyName);
//arrays
var userList = ["Hamza", "Ali", "Hammad", "Khan"];
var newUserList = userList;
console.log(newUserList); //full array prints
console.log(userList[0]); //oneindexaddress
console.log(userList[0], userList[2]); //multiple index print
var oneArray = userList[0];
console.log(oneArray);
var userNameAndRollNumber = ["hamza", "kahn", 1, 2]; //different type of data in one array
console.log(userNameAndRollNumber[0], userNameAndRollNumber[2]);
//if you want to replace any array from other array
userList[1] = "huzaifa";
console.log(userList);
