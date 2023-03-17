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

console.log(newGame)

// interface are similar to type aliases but the only apply to objects 

interface Rectangle {
    width : number,
    height: number
}

const rectangle: Rectangle = {
    width: 220,
    height: 480
}

console.log(rectangle)

// you can extend and interface by adding new property to the original properties

interface ShapeColor extends Rectangle {
    shape: string,
    color : string
}

const shapeColor: ShapeColor = {
    width : 180,
    height : 210,
    shape : "rectangle",
    color: "orange"
}


console.log(shapeColor)

// ------ Union Types -------
// when using unions you need to know what your type is to avoid errors 
// we use unions when we know we will have different types of parameter like (number | string) the pipe which stands for OR mean we expect to have a number or string parameter

function response(code: string | number){  
    console.log(`this is our status code ${code}`)
}
response(200)
response("404")

const newAccount: string | boolean = "Justice Figo"

// ----------- functions -------

// when writing function in typescript you have to explicitly specify the parameters type and the return value
// if the function retuns nothing you specify with the void keyword

function newFunc():string {
    return " typescript is cool"
}

function myfunc(position: number, name: string): number | string {
    return `student position is ${position} with the name ${name}`
}

function lastFunc(): void{
    console.log("Void means the function returns nothing")
}

newFunc()
myfunc(12, "Ola")
lastFunc()

//----------casting -------------
// casting (changing type) works just like casting in any other program
// casting a variable won't change it value vlc

let newAge : unknown = 22
console.log((newAge as number) % 4)

let newPerson: any = "Dylan"
console.log((<string>newPerson).length)

// classes in typescript include modifiers that control visibility of class members (public = members are visible anywhere, 
//(private = can only be accessed in the class they are decleared, it can't be visible outside the class not even in sub classes
//(protected = can be accessed within it class and subclass that extend the it class 

// example of a simple class

class Animal{
    name: string 
    age: number
    endangered: boolean
    constructor(name: string, age: number, endangered: boolean) {
        this.name = name
        this.age = age
        this.endangered = endangered
    }

    getInfo(): string {
        return `My name is ${this.name} I am ${this.age} years old and it is ${this.endangered} that I am endangered`
    }
}

const Cat = new Animal("Tom", 4, false)

console.log(Cat.getInfo())