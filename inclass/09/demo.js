// Note: Because there is no "module resolver",
//       we have to specify the file extension.
//       We only need to do so in this lesson;
//       later node projects will not require
//       the .js extension.
import { displayHeading } from './display.js';
import { add, about } from './utils.js';
import { supportedShapes, Shape } from './shapes.js';
// Resolve all imports at the start.
displayHeading('Lesson 09 has loaded', '=');
console.log('\t Code is spread across multiple files.');
console.log();

console.log(about.name);
console.log(add(1,2));

// Avoid exporting every variable just because it exists.
console.log(supportedShapes.join(', '));

let circle = new Shape('circle');
circle.assignDimensions({ radius: 5}); // dimensions = {radius:5}
console.log(circle.area());
