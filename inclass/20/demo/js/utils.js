function describeResponseProblem(response, detail) {
  const message = `${response.status} ${response.statusText} from ${response.url}`;
  return detail ? `${message}. ${detail}` : message;
}
function assertOk(response) {
  if (!response.ok) {
    throw new Error(describeResponseProblem(response));
  }
}

function assertContentType(response, expectedType) {
  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.includes(expectedType)) {
    const detail = `Expected ${expectedType}, but received
    ${contentType || 'no content type'}`;
    throw new Error (describeResponseProblem(response, detail));
  }
}

function getContentType(response) {
  return response.headers.get('content-type') ?? '';
}

export async function fetchJson(endpoint) {
  const response = await fetch(endpoint);
  assertOk(response);
  assertContentType(response, 'application/json');
  return response.json();
}

export async function fetchText(endpoint, expectedType) {
  const response = await fetch(endpoint);
  assertOk(response);
  assertContentType(response, expectedType);
  return response.text();
}

export async function fetchBlob(endpoint, expectedType) {
  const response = await fetch(endpoint);
  assertOk(response);
  assertContentType(response, expectedType);
  return response.blob();
}

export async function sendJson(endpoint, options) {
  const fetchOptions = {
    ...options, // spread operator 
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  };

  if (options.body && typeof options.body !== 'string') {
    fetchOptions.body = JSON.stringify(options.body);
  }

  const response = await fetch(endpoint, fetchOptions);

  assertOk(response);
  assertContentType(response, 'application/json');

  return response.json();
}

export { describeResponseProblem, getContentType };
