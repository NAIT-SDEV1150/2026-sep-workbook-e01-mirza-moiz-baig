import { fetchJsonData, postData } from './utils.js';

const loadButton = document.querySelector('#load-bodies');
const addForm = document.querySelector('#add-body');
const bodyList = document.querySelector('#body-list');
const statusMessage = document.querySelector('#status-message');

const endpoint = 'http://localhost:3000/bodies';

function showStatus(message, type = 'info') {
  statusMessage.textContent = message;
  statusMessage.dataset.status = type;
}

function renderBodies(bodies) {
  // TODO: Clear the current list.
  // TODO: Create and append one <li> for each body.
  // TODO: Include the thumbnail image for each body.
}

function loadHandler() {
  // TODO: Show a loading message.
  // TODO: Call fetchJsonData(endpoint).
  // TODO: Render bodies on success.
  // TODO: Show a user-facing error on failure.
}

async function submitHandler(event) {
  event.preventDefault();

  // TODO: Collect form values with FormData.
  // TODO: POST the body, reset the form, and reload the list.
  // TODO: Show a user-facing error on failure.
}

loadButton.addEventListener('click', loadHandler);
addForm.addEventListener('submit', submitHandler);
 


/**
 * Both .then() and async/await work with Promises.
await does not eliminate asynchronous behaviour; it makes asynchronous code easier to read.
await pauses the execution of that async function, not the entire browser.
async allows a function to use await.
.catch() handles promise rejection.
.then() handles successful promise resolution.
A Promise represents a result that will become available later.
fetch() does not immediately give us the requested data. It returns a Promise.
Content-Type: application/json tells the server what format we are sending.
JSON.stringify() converts JavaScript objects into JSON strings.
response.json() is also asynchronous and returns a Promise.
We explicitly throw an error when response.ok is false.
HTTP errors such as 404 do not automatically reject a fetch Promise.
response.ok checks whether the HTTP request received a successful status.
fetch() gives us a Response object, not the actual JSON data.
 */


/**
 * Five things you must understand before the end of this lecture. 
 * 1. Fetch does not return JSON directly.
fetch() → Promise → Response → response.json() → Promise → JavaScript data.
2. Await does not block the entire browser.
It pauses the current async function while other browser activity can continue.
3. HTTP errors are not necessarily JavaScript errors.
A 404 response can still fulfill the fetch Promise. Check response.ok.
4. JSON and JavaScript objects are different.
5. POST and frontend rendering are separate operations.
POST saves the new record on the server. We call loadHandler() afterward to retrieve the updated list and render it.
response.json() → parsed JavaScript value.
JSON.stringify(object) → JSON string.
 */