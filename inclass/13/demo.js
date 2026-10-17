console.log('Lesson 13 demo.js has loaded');
console.log('===============================');
console.log();
// CALLBACKS.
// array methods
console.log('Manual loop over study minutes');
console.log('------------------------------');

let studyMinutes = [45, 30, 0, 75, 50, 90, 20];
let totalMinutes = 0;
let longestSession = studyMinutes[0];

for (let index = 0; index < studyMinutes.length; index++) {
    let minutes = studyMinutes[index];
    totalMinutes += minutes;

    if (minutes > longestSession) {
        longestSession = minutes;
    }
    console.log(`Day ${index + 1}: ${minutes} minutes`);
}

console.log('ForEach for repeated output');
console.log('---------------------------');
//  the callback function inside .forEach() receives 3 possible arguements (element, index, array(optional))
//  [45, 30, 0, 75, 50, 90, 20];
studyMinutes.forEach((minutes, index) => {
    console.log(`Study log ${index + 1}: ${minutes} minutes.`);
});
// .forEach() returns nothing
// (parameters) => {function code} this is an arrow function
// .forEach() calls the callback once for each item.
// Use it when you have to do repeated work, not to build a new array. 

// .map() returns a new array of mapped values.
console.log('Map each value into display text');
console.log('--------------------------------');
// (element, index, array(optional))
let dailyLabels = studyMinutes.map((minutes, index) => {
    return `Day ${index + 1}: ${minutes} minutes.`
});
console.log(dailyLabels);

let numbers = [1,2,3];
let doubled = numbers.map((number) => { // builds a new array
    return number * 2;
});
console.log(doubled);

// .find and .findindex
console.log('Course task data');
console.log('----------------');

let courseTasks = [
  {
    title: 'Read loop examples',
    priority: 2,
    minutes: 25,
    complete: true,
  },
  {
    title: 'Finish array practice',
    priority: 1,
    minutes: 45,
    complete: false,
  },
  {
    title: 'Review callback syntax',
    priority: 3,
    minutes: 20,
    complete: false,
  },
  {
    title: 'Submit reflection',
    priority: 2,
    minutes: 15,
    complete: true,
  },
];

// whenever a method returns an array, please use a variable to store that array.
let taskName = courseTasks.map((task) => {
    return task.title;
});
console.log(taskName);

console.log('find one item');
console.log('-------------');

let firstIncompleteTask = courseTasks.find((task) => {
    return task.complete === false;
})
// .find() and .findIndex() returns the first occurence of the element/index (stops at the first match)
console.log(firstIncompleteTask);

let firstHighPriorityIndex = courseTasks.findIndex((task) => {
    return task.priority === 1;
});
// returns the first matching index
// (element, index, array(optional))

console.log('filter matching items');
console.log('---------------------');
let incompleteTasks = courseTasks.filter((task) => {
    return task.complete === false;
});
console.log(incompleteTasks);
// use .filter() when your output may contain zero one or more items.
let quickTasks = courseTasks.filter((task) => {
    return task.minutes <= 25;
});
console.log(quickTasks);

console.log('SLICE vs SPLICE');
let firstTwoTasks = courseTasks.slice(0,2); // 0 is the starting position and 2 is the no. of entries you want back.
console.log(firstTwoTasks);
// (element, index, array) is not used by .splice and .slice

// .slice never changes the original array.
// . splice will change the original array.
let editableTasks = [...courseTasks]; // ... SPREAD OPERATOR makes a shallow copy.
let removedTasks = editableTasks.splice(1, 1, { // 1 is the startIndex, 1 is deleteCount, {} is the item you want to add
    title: 'Practice slice and splice',
    priority: 1,
    minutes: 30,
    complete: false,
});
console.log('Removed task from splice()');
console.log(removedTasks);
console.log('Editable tasks after splice()');
console.log(editableTasks);

let num = [1,2,3];
num.splice(1,0,4); // adds 4 at index 1 and removes nothing.
console.log(num);
// .splice can add remove and update the arrays.

console.log('Sort copied arrays');
console.log('------------------');

let tasksByMinutes = [...courseTasks].sort((firstTask, secondTask) => {
    return firstTask.minutes - secondTask.minutes;
})
console.log(tasksByMinutes);

let tasksByTitle = [...courseTasks].sort((firstTask, secondTask) => {
  return firstTask.title.localeCompare(secondTask.title);
});
console.log(tasksByTitle);

/**
 * A manual for loop makes the index movement visible.
.forEach() runs repeated work for each item.
.map() creates a new value for every item.
.find() and .findIndex() stop at the first match.
.filter() keeps every item that matches a condition.
.slice() copies part of an array without changing the original.
.splice() changes the array it is called on.
.sort() orders values using a compare function.
 */