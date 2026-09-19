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
itemPrices[1] = 5.15;
console.log(pickupItems);

// add an entry to the end of array
pickupItems[pickupItems.length] = 'frozen peas';
itemPrices[itemPrices.length] = 3.75;
frozenItems[frozenItems.length] = true;
console.log(pickupItems);

console.table(pickupItems);
console.table(frozenItems);
console.table(itemPrices);

let firstItem = pickupItems[0];
let firstPrice = itemPrices[0];
let firstFrozenStatus = frozenItems[0];

console.log(`${firstItem} costs $${firstPrice.toFixed(2)}.`);
console.log(`Frozen item? ${firstFrozenStatus}`)

// Arrays with the same length and related are called Parallel arrays.
// Parallel arrays are easy to break.
console.clear();// clears the screen

console.log('comparing arrays with objects');

let store = {
    name: 'Corner Market',
    aisleCount: 9,
    pickupAvailable: true
};
console.log(`Is store an array? ${Array.isArray(store)}`);
// All objects are not arrays but all arrays are objects.
console.log(store.name);
console.log(store['name']); // bracket notation for objects
console.log(pickupItems[2]); // bracket notation for arrays.

let pickupDetails = {
    'order number': 'GM-2048', // This is not preferred
    'customer number' : 'Riley Morgan',
    status: 'ready'
}
console.log(pickupDetails['order number']);
console.log(pickupDetails['customer number']);

let cart = [
    {
        name: 'bread',
        price: 3.49,
        quantity: 1
    }, // index 0
    {
        name: 'oat milk',
        price: 1.55,
        quantity: 2
    }, //index 1
    {
        name: 'frozen peas',
        price: 5.66,
        quantity: 9
    } // index 2
]

console.table(cart);
console.log('We can isolate a single object in the array\n', cart[0]);
console.log('The second item is:', cart[1].name);
console.log('The quantity of frozen peas: ', cart[2].quantity);
console.log('The price of bread', cart[0].price);
console.log(cart[cart.length]); //returns undefined because the bracket notation index exceeds the length of the cart.
// console.log(`cart[cart.length].price gives ${cart[cart.length].price}`);