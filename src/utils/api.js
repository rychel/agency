const Api = (method, value, path) => {
  const url = 'https://9082-129-0-81-247.eu.ngrok.io/' + path;

  if (method === 'POST') {
    console.log('this method');
    return fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: value}),
    }).then(res => res.json())
    .then(res => console.log(res));
  } else {
    console.log('other method');
    return fetch(url).then(res => res.json());
  }
};

export default Api;
