function greeting()
{
console.log('Lesson 05 demo.js has loaded');
console.log('=============================');
}
greeting();
// function definition
function addTwoNumbers(a,b) {
    console.log(a+b);
}
// without a function call, the definition is dead code
addTwoNumbers(1,2);
addTwoNumbers(3,4);

function printJohn() {
    console.log('john');
}
printJohn();

function multiply(a,b) {
    console.log(a*b);
}
multiply(3,2);

function displayHeading(text, marker = '-') { // defines a default value for marker
    console.log(text);
    console.log(marker.repeat(text.length));
}
displayHeading('Lesson 05 demo.js has loaded','=');
// marker = '-'
// text = 'Lesson 05 demo.js has loaded
// Arguements are the actual values passed inside the function call
// Function defintion has parameters

function calculateBusCount(studentCount, seatsPerBus) {
    return Math.ceil(studentCount/seatsPerBus);
}

function calculateMealCost(studentCount, mealPrice) {
    return studentCount * mealPrice; // 75 * 9.79
}

function formatMoney(amount) {
    return `$${amount.toFixed(2)}`;
}

displayHeading('Field trip demo','=');
let studentCount = 75;
let seatsPerBus = 18;
let mealPrice = 9.79;
let admissionPrice = 14.5;
let depositPaid = 50;
let busCount = calculateBusCount(studentCount, seatsPerBus); // 5
let mealCost = calculateMealCost(studentCount, mealPrice); // stores the return value
console.log(busCount);
console.log(formatMoney(mealCost));
console.log(formatMoney(calculateMealCost(studentCount, mealPrice)));
// To display the output of return statement, you need to console.log() the function call.


// Function Expressions
const calculateAdmissionCost = function(studentCount, admissionPrice) {
    return studentCount * admissionPrice;
};
// function is anonymous and variable points to it

displayHeading('Function expressions');

let admissionCost = calculateAdmissionCost(studentCount, admissionPrice);
console.log(admissionCost);
console.log(typeof admissionCost);
console.log(typeof calculateAdmissionCost);

const calculateAmount = function(firstAmount,SecondAmount, operation) {
    return operation(firstAmount, SecondAmount);
};

const addAmounts = function(firstAmount,SecondAmount) {
    return firstAmount + SecondAmount;
};

const subtractAmounts = function(firstAmount, secondAmount) {
  return firstAmount - secondAmount;
};
let x = calculateAmount(11,7,subtractAmounts);
console.log(x);
let tripSubtotal = calculateAmount(mealCost, admissionCost, addAmounts);
let remainingDeposit = calculateAmount(tripSubtotal, depositPaid, subtractAmounts);
console.log(tripSubtotal);
console.log(remainingDeposit);

const buildNumberLogger = function(){
    let currentStep = 1;
    return function(text) {
        console.log(`${currentStep}) ${text}`);
        currentStep++; // currentStep +=1 OR currentStep ++ are the same thing
    };
};
displayHeading('Returning a function from another function');
let logStep = buildNumberLogger();
logStep(`Confirm ${studentCount} students.`);
logStep(`Reserve ${busCount} buses`);
logStep(`Collect ${formatMoney(remainingDeposit)} remaons after deposit`);
console.log();

let morningCheckList = buildNumberLogger();
morningCheckList('Load lunch');
// function states are diff for morningCheckList and logStep



