console.log(Number.MAX_SAFE_INTEGER);
let a = 9007199254740992;
let b = 9007199254740993;

console.log(a === b); // true 

let x = 9007199254740992n;
let y = 9007199254740993n;// big integers have extra n at the end

console.log(x === y); // false
console.log(a + x); //not possible
// let x = 10.9n is not possible because big int have dont work for decimals