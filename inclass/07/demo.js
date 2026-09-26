displayHeading('Lesson 07 demo.js has loaded', "=");
// import { displayHeading } from "../05/demo";
console.log();

/**
 * Display a heading in the console with a leading blank line.
 * @param {string} text The heading text
 * @param {string?} marker The underline character (defaults to `-`)
 */

function displayHeading(text, marker = "-") {
  console.log(); // Blank line before the heading
  console.log(text);
  console.log(marker.repeat(text.length));
}
// = is assignment operator and == is relational operator === strict comparsion.
// Begin Lesson 07
// Mirza Moiz Baig, 25th September 2026.
displayHeading('Basic If statement');

let batteryPercentage = 64;
let lowBatteryWarning = 20;

function checkBattery() {
  if (batteryPercentage > lowBatteryWarning) { // must yield boolean true/false
    console.log('Battery level is acceptable'); // single line if statements have this syntax
    console.log('Device can keep running');
  }
  console.log(`Battery percentage ${batteryPercentage}`);
  console.log();
}
checkBattery();
batteryPercentage = 12;
checkBattery();

displayHeading('Basic if-else statement');
function bookSeats(seats) {
  let fee = 0;// initializing the variable.
  if (theatreSeats >= reservedSeats + seats) {
    console.log('Booking confirmed.');
    reservedSeats += seats;
    fee = seats * 12.50;
    console.log(`${seats} seats booked for $${fee.toFixed(2)}`);
  } else {
    console.log("Booking declined.");
    console.log(`Unable to book ${seats} seats; not enough seats available.`)
  }
  console.log();
  return fee;
}
let theatreSeats = 25, reservedSeats = 5, groupAfee, groupBfee;
groupAfee = bookSeats(20);
console.log(groupAfee);

displayHeading('Booleans and Truthy/Falsey Conditions');
let isEmpty = true;
if (isEmpty) {
  console.log('Play cancelled');
} else {
  console.log('The play is on!');
}
isEmpty = (reservedSeats == 0);
/* Falsey values is JS
1) undefined
2) null
3) 0
4) ''
5) {}
if (undefined) would be treated as if (false)
if 1 same as if true
 */
function announcePlayStatus() {
  if (reservedSeats)
    console.log(`The play is on! ${reservedSeats} in the audience`);
  else
    console.log('Play cancelled! No audience.');
}
reservedSeats = 0;
announcePlayStatus();

displayHeading('Nested if else statements.');

function reportTriangle(base, height, diagonal) {
  let triangleType;
  let hyportenuse = Math.round(Math.hypot(base,height) * 1000) / 1000;
  if (diagonal == hyportenuse) {
    triangleType = 'right angle triangle';
  } else {
    if (diagonal > hyportenuse) {
      triangleType = 'acute';
    } else {
      triangleType = 'obtuse';
    }
  }
  console.log(`The triangle has side lengths of ${base}, ${height} and ${diagonal}`);
  console.log(`Classification: ${triangleType}.`);
  console.log();
}
reportTriangle(12, 35, 37);
reportTriangle(7, 5, 17);
reportTriangle(5, 7, 8);

// Should we use multiple if statements
/*
if {}
if {}
if {}
OR
if {}
else if {}
else {}
*/
export { checkBattery, bookSeats, announcePlayStatus, reportTriangle };