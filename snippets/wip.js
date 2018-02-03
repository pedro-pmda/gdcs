// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = '<div class="card">' +
        '<h3 class="name">' + animal.name + '</h3>' +
        '<img src="' + animal.name + '.jpg" alt="' + animal.name +'" class="picture">' +
        '<div class="description">' +
            '<p class="fact">' + animal.fact + '</p>' +
            '<ul class="details">' +
                '<li><span class="bold">Scientific Name</span>: ' + animal.scientificName + '</li>' +
                '<li><span class="bold">Average Lifespan</span>: ' + animal.lifespan + '</li>' +
                '<li><span class="bold">Average Speed</span>: ' + animal.speed + '</li>' +
                '<li><span class="bold">Diet</span>: ' + animal.diet + '</li>' +
            '</ul>' +
            '<p class="brief">' + animal.summary + '</p>' +
        '</div>' +
    '</div>';

    return cardHTML;
}
// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card"> 
         <h3 class="name"> ${animal.name} </h3> 
         <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
         <div class="description">
            <p class="fact"> ${animal.fact} </p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName} </li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan} </li>
                <li><span class="bold">Average Speed</span>: ${animal.speed} </li>
                <li><span class="bold">Diet</span>: ${animal.diet} </li>
            </ul>
            <p class="brief"> ${animal.summary} </p>
        </div>`
    </div>;

    return cardHTML;
}

/***
 * Destructuring
 */

 const point = [10, 25, -34]
 const [x, y, z] = point
 console.log(x, y, z)

 const {a, b, c


 /*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

let one = things;
let two = '';
let three = '';

[one,,,two,,,,three,] = things

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

/****
 * 
 * 
 */


 /*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

for (const day of days) {  
    console.log( `${day[0].toUpperCase()}${day.slice(1)}`)
}




/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
    if (nums.length === 0) return 0;
    let sum  = 0;
    for(const num of nums) {
        //console.log(`Suma ${sum}`);
        //console.log(`Num ${num}`);
        sum += num
    }
    //console.log(sum / nums.length)
    return sum / nums.length
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());



/*
 * Programming Quiz: Convert Function into an Arrow Function (2-1)
 */

// convert to an arrow function
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(square) {
	return square * square;
});

const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square => square * squeare)


console.log(...squares)

function foo() {
    var a = 2;
    this.bar();    
}



4 Reglas para saber a qué llama this

Default Binding

function foo(something) {
    console.log(this.a, something);
    return this.a + something
}

function bind(fn,obj) {
    return function() {return fn.apply(obj,arguments)};
}

var obj = { a:2 }

var bar = bind (foo, obj)

var b = bar( 3 ); // 23


console.log ( b ) // 5

function foo() {
    return (a) => {console.log(this.a)}
};

var obj1 = {a:2};
var obj2 = {a:3};

var bar = foo.call(obj1);

bar.call(obj2);



function buildHouse({floors = 1, color = 'red', walls = 'brick'} = { }) {    
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls`
}


/* tests */
console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.
/* */



/*
 * Programming Quiz: Using Default Function Parameters (2-2)
 */

function buildHouse({floors = 1, color = 'red', walls = 'brick'} = { }) {    
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls`
}

Your house has 1 floor(s) with red brick walls
Your house has 1 floor(s) with red brick walls.
Your house has 1 floor(s) with red brick walls
Your house has 1 floor(s) with red brick walls.
Your house has 3 floor(s) with yellow brick walls
Your house has 3 floor(s) with yellow brick walls.

/* tests*/
console.log(buildHouse()); // 
console.log(buildHouse({})); // 
console.log(buildHouse({floors: 3, color: 'yellow'})); // 
/* */








/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

// your code goes here
class Bicycle extends Vehicle {
    constructor() {
        super(,2,"honk honk");        
    }

}



/* tests
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk
*/


let myFavoriteFlavors = new Set();
myFavoriteFlavors.add("chocolateschip");
myFavoriteFlavors.add("cookies and cream");
myFavoriteFlavors.add("strawberry");
myFavoriteFlavors.add("vanilla");
myFavoriteFlavors.delete("strawberry");

/*******************************************************************/


const flavor1 = { flavor: 'chocolate'};
const flavor2 = { flavor: 'straciatella'};
let uniqueFlavors = new WeakSet();
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add({ flavor: 'chocolate'});

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const [key,value] of members) {
    console.log(key, value);
}


