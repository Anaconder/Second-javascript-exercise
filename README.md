Notes
A "truthy" value is any value that is considered true when it is encountered in a Boolean context, like within an if statement. All values are truthy unless they are defined as falsy, and the only falsy values are:

false
0
-0
0n
""
null
undefined
NaN


If statement Syntax:
if (x == 10) {
  // do this
} else {
  // do this
}

nested if statements Syntax:
if (x >= 10) {
	//do this
} else if (x <= 10>) {
	//do this
} else {
	//do this
}

chained if statements Syntax:
if (x >= 10) {
	//do this
} else if (x <= 10>) {
	//do this
} else {
	//do this
}

switch conditional Syntax:
let x = '0';
switch (x) {
   case '1':
       // do something...
       break;
   case '2':
       // do something...
       break;
   default:
       // do something...
       break;
}


Ternary Operators Syntax--> (conditional) ? (value_if_true) : (value_if_false)

Errors
We create our own errors throught the use of the throw statement. The throw statement stops execution of the current block of code (the statements after the throw will not be executed), and the program will terminate (unless... there's a catch. )

Syntax Errors: errors within the spelling and grammar of your code that cause the program to stop working partially through (or not run at all). These types of errors are usually simple fixes as long as you know what you're looking for.
Logic Errors: errors where the syntax is correct, but the logic behind the code is not what you inteded it to be. The program will run, but it will give incorrect results. These errors are much more difficult to debug, as there is no error thrown that directs you to the source of the error.

Try and Catch
The try block defines code to try. If an error is thrown within that block (either manually or by JavaScript), it will then execute the code within the catch block. There is also an optional finally block that will always be executed before control flow exits the try...catch construct.



Dylan's Notes

let x = 10;
let y = 5;

let k;

// Better Scope Definitions
//  // Global - can be at BOM or sometimes refered to page/script scoped
//  // Modular - scoped for the module (page/script)
//  // Block scoped - exists only in that block and inner blocks below it

// Types of Errors:
//  // Reference Error - variable/value doesnt exist or it doesnt exist in the scope you are trying access it in, or file has incorrect paths

{
  // Variable declared inside a code block, cannot be accessed outside a code block
  //Variables can be passed to inner code blocks, never outer
  let z = x + y;
  // console.log(z);
}

//  If / Else - if conditional is met, run code. else skip or check next condition
// // 1.) if keyword
// // 2.) followed by parenthases with a conditional statement,
// // 3.) followed by braces containing code to be run
// // 4.) optional, else if, or else statement
let num = 10;

if (num <= 10) {
  console.log(`✅ ${num} is less than or equal to 10.`);
} else {
  console.log(`❌ ${num} is greater than 10.`);
}


let grade = 54
// If a learner gets 90 or higher: console.log("A")
if(grade >= 90){
    console.log(`A`)
} else if(grade >= 80){
    // If a learner get 80 or above: console.log("B")
    console.log(`B`)
} else if( grade >= 70){
    // If a learner get 70 or above: console.log("C")
    console.log(`C`)
} else if( grade >= 55){
    // If a learner get 55 or above: console.log("D")
    console.log(`D`)
} else {
    // Any grade lower than 55: console.log("F")
    console.log(`F, try again`)
}