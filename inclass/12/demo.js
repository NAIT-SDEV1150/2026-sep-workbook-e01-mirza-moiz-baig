console.log('Lesson 12 demo.js has loaded');
console.log('===============================');
console.log();
// loops run a block of code more than once
// conditionals choose whether to run a block of code or not
// every loop needs a way to stop
// Loops that never stop are called INFINITE LOOPS.
// use a WHILE loop when repitition is controlled by a condition
// use a FOR loop when no. of repitition is known or naturally tied to an index

console.log('Saving towards a purchase');
console.log('-------------------------');

let laptopCost = 950;
let savingsBalance = 320;
let monthlyDeposit = 135;
let month = 0;

while (savingsBalance < laptopCost) {
    month = month + 1;
    savingsBalance = savingsBalance + monthlyDeposit;
    console.log(`Month ${month}: $${savingsBalance}`);
}

console.log('study session tutorials');
console.log('-----------------------');
let studyMinutes = [45, 30, 0, 75, 50, 90, 20];
let totalMinutes = 0;
let completedSessions = 0;

for(let index = 0; index < studyMinutes.length; index++) {
    let minutes = studyMinutes[index];
    if (minutes > 0) {
        completedSessions += 1;
        totalMinutes += minutes;
        console.log(`Session ${index+1}: ${minutes} minutes`);
    } else {
        console.log(`Session ${index + 1} missed.`);
    }
    if (minutes >= 75) {
        console.log('long session');
    }
}
console.log(completedSessions);
console.log(totalMinutes); // ACCUMULATOR VARIABLES
let averageMinutes = totalMinutes/completedSessions;
console.log(averageMinutes);

console.log('First target day');
console.log('----------------');

let targetMinutes = 150;
let runningtotal = 0;
let targetDay = undefined;

for(let index = 0; index < studyMinutes.length; index++) {
    runningtotal += studyMinutes[index];
    if (runningtotal >= targetMinutes) {
        targetDay = index + 1;
        break; // breaks at the current iteration
    }  
}

if (targetDay) {
    console.log(`The target was reached on day ${targetDay} `);
} else {
    console.log('The target was not reached this week');
}

// NESTED LOOPS 
console.log('Weekly Habit tracker.');
console.log('--------------------');
habits = ['Read', 'Code', 'review'];
days = ['Mon', 'Tue', 'Wed', 'Thu'];
for(let habitIndex = 0; habitIndex < habits.length; habitIndex++) {
    let line = `${habits[habitIndex]}:`;
    for(let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        line = `${line} ${days[dayIndex]} = []`;
        console.log(line);
    }
}

console.log('Optimized threshold research');

let rewardThreshold = 180;
let checkedDays = 0;
runningtotal = 0;
for (let minutes of studyMinutes) {
    checkedDays += 1;
    runningtotal += minutes;
    if(runningtotal >= rewardThreshold) {
        break;
    }
}
console.log(checkedDays);
console.log(runningtotal);