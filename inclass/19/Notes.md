### ASYNC REQUESTS.
HTTP requests take time.
The browser sends a request, the server will work on it and the response will arrive later.
Javascript cannot treat that response as an immediate value so it must wait for it.

# This is why fetch() returns a promise. 
A promise represnts work that may finish later.

