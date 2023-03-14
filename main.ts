export {}

// you can declear a variable with let without initializing the variable 
// you CANNOT declear a variable with const without immediatly initializing the variable
// both let and const are blocked scope keyword so they can not be redeclared once declared
// declare changing variable values with let keyword and unchanging variable values with const keyword for example

let sum; // can be uninitialized
const numbers = [1, 2, 3, 4, 5]; // most be initialized 

sum = numbers[0] + numbers[4];
console.log(sum);

// variable types---- static type checking and accurate intellisence checking are both benefits of type assignments.

// ------Basic types-------

// There is explicit and implicit type assigment in typescript 

// Example of explicit type assigment
const Name: string = "Rango";
let age: number = 27
let isSingle: boolean = true; 

let sentence = `${Name} is a lonely ${age} year old single male`
console.log(sentence);

// implicit type assigment
const gender = "Male"
let offences  = 4
let isEmployed = true;
console.log(gender, offences, isEmployed);

// in a case of implicit type assigment typescript will infer (that is assume the type based on the value assigned ot it) when it not sure it will set the type to any which  disables type checking.

//----------special types-------------
// type any disables type checking and set the variable to any type , avoid using this 

let boy: any = "Lucas"

// type unknown is the safer version of any, you use it when you dont know the type or will like to specify the time later using casting 

let people: unknown = 10
console.log(people as number + 12 )

//There is another type never this type is really used 

// the null and undefine type

let price: undefined = undefined
let amount: null = null


// -------Array types----------

let members: string[] = [];
members.push("Jack", "Max", "Pete", "Shila")
console.log(members.length)

const positions: Array<Number> = [3, 8, 4, 63, 2];

//-----tuple types----------

const students: [string, number, boolean ] = ["Mark", 27, true ]
console.log(students)

// ------ object type ------

// In the code below providing the vale of the salary is optional the ? nmakes it an optional value to provide

const staffIfo: {firstName:string, lastName:string, email:string, age:number, salary?:number, active:boolean} = {
firstName:"John",
lastName: "Doe",
email: "jdoe@example.com",
age: 21,
active: true
}

console.log(staffIfo.salary= 42000)


// ------------ type Enum --------------

// on default enums will initialize the first value to 0 
enum CardinalPoints { North = 2, South, East, West}

console.log(CardinalPoints.West)

// you can assign string or numeric values to this set of constants 
enum statusCode {
    NotFound = 400,
    Success = 200,
    Language = "English",
    BadRequest = 400
}

if(statusCode.Success === 200 && CardinalPoints.South === 3){
    console.log(`fresh Start : ${statusCode.Language}`)
}


// ------------ type Aliase and interfaces --------------------
type Game = string
type Player = string
type score = number
type winners  = string[]

type NewGame = {
    game:Game,
    name: Player,
    points: score,
    topScores: winners

}

const gameName: Game = 'Hengo'
const gamerName: Player = "Mike"
const gamerPoints: score = 245
const gameWinners: winners = ["Jerry", "tom", "Duck"]

const newGame: NewGame = {
    game:gameName,
    name: gamerName,
    points: gamerPoints,
    topScores: gameWinners
}