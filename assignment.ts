//camelCase
let myName: string = "hamzaJaved"
//snake_case
let my_name: string = "hamza_javed";
//PascalCase
let MyName: string = "HamzaJaved"

console.log(myName, my_name, MyName);

//arrays
let userList: string[] = ["Hamza", "Ali", "Hammad", "Khan"];
let newUserList = userList;
console.log(newUserList) //full array prints
console.log(userList[0]) //oneindexaddress
console.log(userList[0], userList[2]); //multiple index print
let oneArray= userList [0];
console.log(oneArray);
let userNameAndRollNumber: any[] = ["hamza", "kahn", 1, 2]  //different type of data in one array
console.log(userNameAndRollNumber[0], userNameAndRollNumber[2])
//if you want to replace any array from other array
userList [1]= "huzaifa";
console.log(userList);
