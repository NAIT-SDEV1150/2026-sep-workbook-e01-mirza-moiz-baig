### USEFUL ACRONYMS
HTTP: HyperText Transfer Protocol
API: Application Programming Interface
REST: Representational State Transfer
JSON: JavaScript Object Notation
URL: Uniform Resource Locator
URI: Uniform Resource Identifier

### difference between JSON and javascript object.
Json looks a lot like javascript object but it is a data format.
This matters bcz API responses and db.json files need to be valid JSON before JS can work with them.

# KEY JSON characteristics
1) Data is stored as key/value pairs
2) Property AND String values names must use DOUBLE QUOTES
3) JSON supports objects, arrays, strings, numbers, booleans and NULL.
4) JSON does not allow comments, trailing commas, functions, variables or expressions.
5) objects  belong in a .js file and can use javascript features.
6) JSON belongs in a .json file or an API response (must stay plain data)

### example
# OBJECT
const body = {
  name: "Earth",
  category: "planet",
  orbitalPeriod: `${365.25} Earth days`,
};
# JSON
{
  "name": "Earth",
  "category": "planet",
  "orbitalPeriod": "365.25 Earth days"
}

### Endpoint and URL

http://localhost:3000 is a url
http://localhost:3000/bodies/2 is  a URL.

http is the protocol.
localhost refers to your own computer.
3000 is the port number.
/bodies is the resource/collection
/2 is an ID inside the resource.
/bodies/2 is the endpoint

### simple explanation
Front end: What the user sees and interacts with in the browser.
Backend: The server-side part of an application that handles requests and data.
API: A way for two software applications to communicate.
Endpoint: A specific URL where an application can request or send data.
JSON Server: A tool that simulates a backend API using a local JSON file.

### understanding HTTP status codes
200 ok- request successful
201 Created - resource created
400 Bad request - request is invalid
404 Not found - resource or ID does not exist
500 Internal Server error - something went wrong on the server

### HTTP METHODS
# GET 
retrieve or read data
# POST
create new data
# PUT
replace an existing resource
# PATCH
partially update a resource
# DELETE
delete a resource

### REST 
REST is an architectural style for creating webAPIs



