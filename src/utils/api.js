const Api = (method, value, path) => {
  const url = 'https://096f-129-0-81-252.eu.ngrok.io/' + path;

  if (method === 'POST') {
    return fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: value}),
    }).then(res => res.json())
    .then(res => console.log(res));
  } else {
    return fetch(url).then(res => res.json());
  }
};

export default Api;
