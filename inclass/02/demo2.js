// Mirza Moiz Baig - Sep 09,2026
console.log('Lesson-02 demo.js has loaded');// ; indicate end of line in javascript
console.log('=============================');
console.log(); // this prints a blank line as an output 
let report = 'Community Event planning demo';
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
let signUpCount = parseInt(signUpText);
let extraGuestCount = parseFloat(extraGuestText);
let finalGuestCount = signUpCount + extraGuestCount;

report += '\n';
report += `\nThe value ${signUpText} is a ${typeof signUpText}`;
report += `\nThe value ${signUpCount} is a ${typeof signUpCount}`;
console.log(report);
