// Mirza Moiz Baig - Sep 09,2026
console.log('Lesson-02 demo.js has loaded');// ; indicate end of line in javascript
console.log('=============================');
console.log(); // this prints a blank line as an output 
let report = 'Community Event planning demo'; //variable declaration
report += '\n-----------------------------';
console.log(report);

let eventName = 'Neighbourhood game night';// javascript follows camelcase naming convention
let roomName = 'Learning commons';
let guestCount = 18;

report += `\nEvent: ${eventName}`; // template literals
report += `\nRoom: ${roomName}`;
report += `\nExpected guests: ${guestCount}`;
console.log(report);

let tablesNeeded;
let seatsPerTable = 6;

tablesNeeded = guestCount/seatsPerTable;

report += '\n';
report += `\nTables needed: ${tablesNeeded}`;
console.log(report);

let snackCost = 3.75;
let drinkCost = 1.5;
let suppliesFee = 12;
let snackBudget = guestCount * snackCost;
let drinkBudget = guestCount * drinkCost;
let totalBudget = snackBudget + drinkBudget + suppliesFee;

report += '\n';
report += `\nSnack budget: $${snackBudget.toFixed(2)}`;
report += `\nDrink budget: $${drinkBudget.toFixed(2)}`;
report += `\nSupplies fee: $${suppliesFee.toFixed(2)}`;
report += `\nTotal budget: $${totalBudget.toFixed(2)}`;
console.log(report);

let signUpText = '18';
let extraGuestText = '4';
let signUpCount = parseInt(signUpText); // converts to an integer
let extraGuestCount = parseFloat(extraGuestText); // converts to a float
let finalGuestCount = signUpCount + extraGuestCount;

report += '\n';
report += `\nThe value ${signUpText} is a ${typeof signUpText}`;
report += `\nThe value ${signUpCount} is a ${typeof signUpCount}`;
console.log(report);


// This is a comment in javascript, single line comment
/*This is a multi line comment
This can be written in multiple lines
There are 2 types of errors in programming
1) Syntax errors: any mistake in writing code (grammatical mistake in english), these can be spotted by the compiler 
2) Logical erros: any errors in writing the logic of code
These errors are not identified by your compiler
You identify them by not getting to the desired output
Bugs = errors
Javascript uses camelCase naming convention*/
const name = 'Jennifer'; // const is also a identifier like let
// The value defined with const cannot change
// name = 'moiz' is not possible, It's a (const)ant
let age = 11;
age = 12;
// var is from old javascript, so please dont use it.
let numberExample = 7;
let stringExample = '7';

report += '\n';
report += `
7 + '7' produces ${numberExample + stringExample};
7 * '7' produces ${numberExample * stringExample};
`;
console.log(report);
