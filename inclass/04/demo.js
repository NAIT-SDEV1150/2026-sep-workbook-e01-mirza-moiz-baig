console.log('Lesson 04 demo.js has loaded');
console.log('=============================');
console.log();

// Mirza Moiz Baig, September 18th, 2026.

console.log('Creating Arrays');

let pickupItems = ['bread', 'milk', 'apple', 'coffee'];// define an array.
/*
Indexing starts at zero for arrays.
Values inside arrays are called entries or elements.
Square brackets help define arrays
 */
let itemPrices = [3.49, 4.25, 5.99, 12.1];
let frozenItems = [false, false, false, false];
console.log(pickupItems);
console.log(`pickup items is of the data type ${typeof pickupItems}`);
console.log(`Is pickupItems an array? ${Array.isArray(pickupItems)}`);
console.log(`pickupItems has ${pickupItems.length} entries.`);
// .length gives you the length of arrays back.

console.log('Accessing entries with index');
console.log(`First item: ${pickupItems[0]}`); // index 0 refers to the first element of array.
console.log(`Second item:${pickupItems[1]}`); // index 1 is the second item of array.
console.log(`last item:${pickupItems[pickupItems.length - 1
]}`);
console.log(`Item at index 10: ${pickupItems[10]}`); // if the accessed item doesnt exist then we always get undefined
console.log(`Items at index -1: ${pickupItems[-1]}`);
// Arrays are mutable

console.log('Updating arrays.');

pickupItems[1] = 'oat milk'; // updates second entry to oatmilk
itemPrices[1] = '5.15';
console.log(pickupItems);

// add an entry to the end of array
pickupItems[pickupItems.length] = 'frozen peas';
itemPrices[itemPrices.length] = 3.75;
frozenItems[frozenItems.length] = true;
console.log(pickupItems);








