// GET REQUEST using promise chaining
export function fetchJsonData(endpoint) {
  return fetch(endpoint)// async operation
  .then(handleResponse);// returns a promise 
  // Once fulfilled, it will give you a response object.
}

function handleResponse(response) {
  // fetch() does not reject automtically for errorlike 404 or 500
   if (!response.ok) { // is not 200
    const message = `Server responded with ${response.status} (${response.statusText})`;
    throw new Error(message);// throw stop the execution and return the error msg
   }
  return response.json(); // converts response to json (async operation)
}
// POST request with async await
export async function postData(endpoint, payload) {
  // await keyword can be used only with async
  // you must await the HTTP response
  const response = await fetch(endpoint, {
    method : 'POST',
    headers : {
      // tells server that the request body contains JSON
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),// JSON.stringify() converts to a string
    });
    return handleResponse(response);
}
/**
 * GET REQUEST using async await
 * export async function fetchJsonData(endpoint) {
  const response = await fetch(endpoint);
  return handleResponse(response);
}
POST REQUEST using promise chaining
export function postData(endpoint, payload) {
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(handleResponse);
}
 */
// try to write delete put patch yourself.