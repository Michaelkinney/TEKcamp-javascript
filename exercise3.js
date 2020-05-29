//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...


isEmpty = function(input){
    if (input.length === 0)
    return true;
    else
    return false;
}
    console.log(isEmpty(''));          // true
    console.log(isEmpty('hello'));     // false






/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead
// (e.g., ‘Learning JavaScript is cool!). 



//your code...


function stringHolder(){
    var str = 'Learning Javascript is hard!';
    var res = str.replace('hard', 'fun');
    return res;
}

console.log(stringHolder());








/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with 
// the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 



//your code...


function myFunction (){
    var myArray= [1, 2, 3, 4, 5]
    for (var i = 0; i < myArray.length; i++) {
    myArray.splice(i,1,Math.pow(myArray[i],2));
}
return myArray;
}
console.log(myFunction());

// with arrow function?


myFunction = () => {

var myArray = [1, 2, 3, 4, 5]

for (var i = 0; i < myArray.length; i++) {
myArray.splice(i,1,Math.pow(myArray[i],2));
}

return myArray;
}

console.log(myFunction());





/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. 
// Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...



function checkValues(value) {
return value > 3;
}

function myFunction() {
var myArray = [1, 3, 5, 7, 9, 1, 3, 5];

return myArray.filter(checkValues);
}

console.log(myFunction());


//////// with arrow function?


checkValues = (value) => value > 3;

myFunction = () => {
var myArray = [1, 3, 5, 7, 9, 1, 3, 5];

return myArray.filter(checkValues);
}

console.log(myFunction());








/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers.
// Use an arrow function and one of the built-in array methods. 



//your code...




myFunction = () => {
var myArray = [5, 7, 9, 1, 3];

var sum = myArray.reduce(function(a, b){
return a + b;
}, 0);

return sum;
}

console.log(myFunction());






/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the 
// complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...



myFunction = (input) => {

var compStrand = [];

for (var i = 0; i < input.length; i++) {
if (input.charAt(i) == 'G') {compStrand[i] = 'C';}
else if (input.charAt(i) == 'C') {compStrand[i] = 'G';}
else if (input.charAt(i) == 'T') {compStrand[i] = 'A';}
else {compStrand[i] = 'T';}
}

return compStrand;
}

console.log(myFunction('GCTA'));






/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  
// Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type. 
// ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];


//your code...

/*
function maxArray() {
var myArray = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];
return myArray.maxArray;
}

console.log(Math.max(myArray));

*/

const truthys = numbers.filter(el => el); //filters out falsys
const primitives = truthys.filter(n => typeof n != 'object');
const noBools = primitives.filter(p => typeof p != 'boolean);
const numStrings = ["zero", "one", "two", "three"];
const numWithStrings = noBools.map(nb => numStrings.includes(nb) ? numStrings.indexOf(nb) : nb);

const nums = numWithStrings.filter(n => typeof x != 'string');
console.log(nums);

console.log(Math.max(...nums));






// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    //your code...
};










/************************************************************* */
// Problem 8:
// add an example of at least 5 JavaScript data types to the given mapObj. 
// The key is the example data type, and the value is the name of the data type. 
// An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");

let dataTypes = new Map();

dataTypes.set(1, 'number');
dataTypes.set('hi', 'string');
dataTypes.set(true, 'boolean');
dataTypes.set(x,'undefined');
dataTypes.set(null, 'null');



console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() 
//statement explaining 
//why this line of code prints false.  Refactor the code on line 106, so you can 
//successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...




//loop through the mapObj and create a new array of only the data types, leaving out
// the example keys of the mapObj.  Use array methods to do this.  Example output :
// ['string',number','boolean',array','object']







/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.

let array = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
let newArray = array.splice().reverse();

console.log(1, array);
console.log(1, newarray);



/************************************************************* */
//Problem 12:
// create a function called performer(cb) that takes in a callback function and runs that
// callback function.  It should return the output of the callback function.

function performer(cb) {
    //code goes here
}



function performer(quote, callback){ 
  var myQuote = "Lets watch my favorite movie, " + quote;
  callback(myQuote); 
}

function logQuote(quote){
  console.log(quote);
}

performer("You know which one it is!", logQuote);







/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
