/*
# Lesson 18 — HTTP and Server-Side Endpoints

## 1. Front End vs. Backend

- **Front end:** The part of an application that users see and interact with in their browser.
- **Backend:** The server-side part of an application that handles requests and data.
- **API (Application Programming Interface):** Allows different software applications to communicate.
- **Endpoint:** A specific URL where an application can request or send data.
- **JSON Server:** A tool that simulates a backend API using a local `db.json` file.

## 2. How Front End and Backend Communicate

1. The front end sends an HTTP request.
2. The backend/API server receives the request.
3. The server processes the request.
4. The server sends an HTTP response.
5. The front end can use the returned data.

## 3. Important Terms

- **HTTP:** HyperText Transfer Protocol — the communication protocol used for requests and responses.
- **REST:** Representational State Transfer — an architectural style commonly used to organize web APIs.
- **JSON:** JavaScript Object Notation — a format used to exchange and store data.
- **URL:** Uniform Resource Locator — the address used to access a resource.
- **Localhost:** Refers to your own computer.
- **Port:** Identifies which local server should receive a request.

Our local API runs at:

`http://localhost:3000`

Our bodies endpoint:

`http://localhost:3000/bodies`

## 4. HTTP Methods (CRUD Operations)

| Method | Purpose |
|---|---|
| GET | Retrieve/read data |
| POST | Create new data |
| PUT | Replace an existing resource |
| PATCH | Partially update an existing resource |
| DELETE | Delete an existing resource |

Remember: CRUD stands for Create, Read, Update, Delete.

## 5. HTTP Request Structure

Example:

```http
POST http://localhost:3000/bodies
Content-Type: application/json

{
    "name": "Earth",
    "category": "planet"
}
```

- Request method: POST
- URL: Identifies the endpoint.
- Header: Describes the content being sent.
- Blank line: Separates headers from the body.
- Request body: Contains the JSON data.

### Important Headers

- `Accept: application/json` — tells the server what response format the client accepts.
- `Content-Type: application/json` — tells the server that the request body contains JSON.

## 6. JSON Rules

JSON is a data format, not JavaScript code.

- Property names must use double quotes.
- String values must use double quotes.
- Objects use `{ }`.
- Arrays use `[ ]`.
- No comments are allowed.
- No trailing commas.
- No JavaScript functions, variables, or expressions.

## 7. Understanding IDs

Every resource has an ID that identifies it.

Example:

```http
GET http://localhost:3000/bodies/2
```

Retrieves the body with ID 2.

When using POST, JSON Server automatically generates an ID for the new resource. Retrieve the resource first if you need its ID for a DELETE request.

## 8. HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 | OK — request successful |
| 201 | Created — new resource created |
| 400 | Bad Request — invalid request |
| 404 | Not Found — resource does not exist |
| 500 | Internal Server Error |

## 9. Tools Used in This Lesson

- `db.json` — stores the mock data.
- JSON Server — runs our local API.
- `requests.http` — lets us manually test HTTP requests.
- Browser — lets us inspect GET requests.
- DevTools Network tab — lets us inspect request methods, URLs, headers, status codes, and response bodies.

## 10. Important Takeaway

A front-end application communicates with a backend API using HTTP requests. The request method determines what operation is performed, the endpoint identifies the resource, and the server returns a response.

**Next lesson:** We will learn how JavaScript uses the Fetch API to communicate with these endpoints directly from the browser.


## REST APIs and Mock REST APIs

**REST (Representational State Transfer):**
An architectural style used to design APIs that communicate using HTTP and organize information around resources.

**REST API:**
An API that follows REST principles and allows applications to interact with resources using HTTP requests.

**Mock REST API:**
A simulated REST API used for development, practice, and testing without building a complete backend.

### JSON Server

JSON Server is the tool we use to create our mock REST API.

It reads our `db.json` file and automatically provides REST-style endpoints.

Our local API server:

`http://localhost:3000`

Our bodies resource:

`http://localhost:3000/bodies`

### Common REST API Operations

| Method | Operation |
|---|---|
| GET | Read a resource |
| POST | Create a resource |
| PUT | Replace a resource |
| PATCH | Partially update a resource |
| DELETE | Delete a resource |

**Important:** JSON Server simulates the backend for our lesson. We are practising real HTTP requests and responses without having to develop a complete backend application.
*/