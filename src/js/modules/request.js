function request(url, method, body) {
  return fetch(`https://api.restful-api.dev/${url}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.json();
    }
    return new Error('smth went wrong, response status is ' + resp.status);
  });
}

export { request };
