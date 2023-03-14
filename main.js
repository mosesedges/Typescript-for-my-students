"use strict";
exports.__esModule = true;
// you can declear a variable with let without initializing the variable 
// you CANNOT declear a variable with const without immediatly initializing the variable
// both let and const are blocked scope keyword so they can not be redeclared once declared
// declare changing variable values with let keyword and unchanging variable values with const keyword for example
var sum; // can be uninitialized
var numbers = [1, 2, 3, 4, 5]; // most be initialized 
sum = numbers[0] + numbers[4];
console.log(sum);
// variable types---- static type checking and accurate intellisence checking are both benefits of type assignments.
// ------Basic types-------
// There is explicit and implicit type assigment in typescript 
// Example of explicit type assigment
var Name = "Rango";
var age = 27;
var isSingle = true;
var sentence = "".concat(Name, " is a lonely ").concat(age, " year old single male");
console.log(sentence);
// implicit type assigment
var gender = "Male";
var offences = 4;
var isEmployed = true;
console.log(gender, offences, isEmployed);
// in a case of implicit type assigment typescript will infer (that is assume the type based on the value assigned ot it) when it not sure it will set the type to any which  disables type checking.
//----------special types-------------
// type any disables type checking and set the variable to any type , avoid using this 
var boy = "Lucas";
// type unknown is the safer version of any, you use it when you dont know the type or will like to specify the time later using casting 
var people = 10;
console.log(people + 12);
//There is another type never this type is really used 
// the null and undefine type
var price = undefined;
var amount = null;
// -------Array types----------
var members = [];
members.push("Jack", "Max", "Pete", "Shila");
console.log(members.length);
var positions = [3, 8, 4, 63, 2];
//-----tuple types----------
var students = ["Mark", 27, true];
console.log(students);
// ------ object type ------
// In the code below providing the vale of the salary is optional the ? nmakes it an optional value to provide
var staffIfo = {
    firstName: "John",
    lastName: "Doe",
    email: "jdoe@example.com",
    age: 21,
    active: true
};
console.log(staffIfo.salary = 42000);
// ------------ type Enum --------------
// on default enums will initialize the first value to 0 
var CardinalPoints;
(function (CardinalPoints) {
    CardinalPoints[CardinalPoints["North"] = 2] = "North";
    CardinalPoints[CardinalPoints["South"] = 3] = "South";
    CardinalPoints[CardinalPoints["East"] = 4] = "East";
    CardinalPoints[CardinalPoints["West"] = 5] = "West";
})(CardinalPoints || (CardinalPoints = {}));
console.log(CardinalPoints.West);
// you can assign string or numeric values to this set of constants 
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 400] = "NotFound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode["Language"] = "English";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
})(statusCode || (statusCode = {}));
if (statusCode.Success === 200 && CardinalPoints.South === 3) {
    console.log("fresh Start : ".concat(statusCode.Language));
}
var gameName = 'Hengo';
var gamerName = "Mike";
var gamerPoints = 245;
var gameWinners = ["Jerry", "tom", "Duck"];
var newGame = {
    game: gameName,
    name: gamerName,
    points: gamerPoints,
    topScores: gameWinners
};
