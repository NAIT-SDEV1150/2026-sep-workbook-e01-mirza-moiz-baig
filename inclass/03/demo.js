console.log('Lesson 03 demo.js has loaded');
console.log('=============================');
console.log();
// Mirza Moiz Baig - Sept 11,2026
console.log('Primitive Values');
console.log('----------------');

let workshopTitle = 'Intro to Digital photography';
let seatsAvailable = 18;
let registrationOpen = true; //This is a boolean(bool) value
// true or false are the only boolean values
const registrationClosed = false;

console.log(typeof workshopTitle);
console.log(typeof seatsAvailable);
console.log(typeof registrationOpen);

console.log('Object Literals');
let workShop = {
    title: 'Intro to Digital Photography',
    room: 'Media lab',
    capacity: 16,
    registered: 11,
    isOnline: false
 };
 // object literal consists of key-value pairs
 // The value on the left of semicolons is the key and the value on the right is value.
console.log(workShop);
console.log(typeof workShop);

// dot operator is used to access values of an object
console.log(workShop.title);
console.log(workShop.capacity);
console.log(workShop.registered);
console.log(`${workShop.title} meets in the ${workShop.room}`);
console.log(`${workShop.capacity - workShop.registered} is the no. of seats left.`);
console.log();

let facilitator = {
    firstName: 'Avery',
    lastName: 'Chen',
    email: 'avery.chen@example.com',
    yearsOfExperience: 5,
    active: true
};
console.log(`${facilitator.firstName} ${facilitator.lastName} is facilitating`);
console.log(`Contact: ${facilitator.email}`);
console.log(`Active facilitator: ${facilitator.active}`);
console.log();
// adding a new values
workShop.facilitator = `${facilitator.firstName}${facilitator.lastName}`;
workShop.waitList = 3;
workShop.registered = workShop.registered + 2;// updating the value of object
console.log(workShop);

//Built in objects
console.log('Builtin objects');
console.log('Date object');
let today = new Date(); // this holds current date and time
let workShopDate = new Date('October 22, 2026 18:30:00'); //this holds user defined date or time
console.log(`Today is ${today.toDateString()}.`);
console.log(`Workshop date is ${workShopDate.toDateString()}.`);// .toDateString() gives you the date back
console.log(`The workshop year is: ${workShopDate.getFullYear()}.`);// .getFullYear() gives you current year/ user-defined year
console.log(`The workshop month is: ${workShopDate.getMonth()}.`); // .getMonth() gives the index of the month back.
console.log(`The workshop day of the month: ${workShopDate.getDate()}.`); // .getDate() gives the day of the month back

let reminderDate = new Date(workShopDate);
let newDate = reminderDate.getDate()-7
reminderDate.setDate(newDate);

workShop.startOn = workShopDate;
workShop.reminderOn = reminderDate;

console.log(`Reminder Date ${workShop.reminderOn.toDateString()}.`);
console.log(`Starting date ${workShop.startOn.toDateString()}.`);

//URL object
console.log('URL object');
let signUpUrl = new URL('https://library.example.test/workshops/photo-basics?level=beginner');
console.log(`Protocol: ${signUpUrl.protocol}`);
console.log(`SignupURL: ${signUpUrl.toString()}`);
console.log(`Host: ${signUpUrl.host}`);
console.log(`Path: ${signUpUrl.pathname}`);
console.log(`${signUpUrl.searchParams.get('level')}`);
console.log();






