/* This is a multi-line comment*/
/**
 * Adds two numbers together
 * @param {number} a first number
 * @param {number} b second number 
 * @returns {number} The sum of both numbers
 */

function add(a, b) {
    return a + b;
}

let info = 'Utility Functions';
/**
 * Information about utility module
 * @type{{name : string}}
 */
let about = {
    name: info
}

export { add, about } // Variables need this way of exporting.

