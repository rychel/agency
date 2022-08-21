const Api = (methods, value, path) => {
  const url = 'https://9082-129-0-81-247.eu.ngrok.io/' + path;

  if (paths == 'POST') {
    return fetch(url, {
      method: methods,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: value}),
    }).then(res => res.json());
  } else {
    return fetch(url).then(res => res.json());
  }
};

export default Api;
