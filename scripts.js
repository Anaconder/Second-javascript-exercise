console.log("IF STATEMENTS")

let num=-1

if(num%2==0){
  console.log('it is even')
}else{
  console.log('it is odd')
}

let age=20

if(age>=18){
  console.log('Access granted')
}else{
  console.log('Access Denied')
}



console.log("NESTED IF STATEMENTS")
if(num>0){
  if(num>100){
    console.log('it is positive and greater than 100')
  }else {
    console.log('it is positive but not greater than 100')
  }
}else {
  console.log('it is negative')

}


console.log("CHAINED IF STATEMENTS")
let x=85
if (x >= 90) {
	console.log("A")
} else if (x >=80) {
	console.log("B")
} else if (x >=70) {
	console.log("C")
} else if (x >=55) {
	console.log("D")
} else {
	console.log("F")
}



console.log("SWITCH CONDITIONAL")

let X = 5;
let Y = 4;
let operand = "*";
switch (operand) {
   case "+":
       console.log(X + Y);
       break;
   case "-":
       console.log(X - Y);
       break;
   case "*":
       console.log(X * Y);
       break
   case "/":
       console.log(X / Y);
       break;
   default:
       console.log("Invalid Operand")
       break;
}


console.log("Ternary Operators")
let c = 10;
let isTen = c == 10 ? true : false;
console.log(`${isTen}`)

// console.log('throw statement')
// let C = 10;

// if (C < 0) {
// 	console.log("Negative!");
// } else {
// 	throw "Error - I don't know what I'm doing.";
// }

// console.log("Does this log?");


console.log('try...catch')

let v = 10;

try {
	if (v < 0) {
		console.log("Negative!");
	} else {
		throw "Error - I don't know what I'm doing.";
	}
} catch (error) {
	console.log(error);
}

console.log("Does this log?");


let V = 10;

try {
	if (V > 0) {
		isEven= (V % 2 == 0) ? true : false;
	} else if (V <= 0) {
		throw "Error - Value of 0 or below.";
	}

	console.log(isEven);
} catch (err) {
	console.log(err);
} finally {
	console.log(V);
}