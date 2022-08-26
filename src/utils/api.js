const Api = (method, value, path) => {
  const url = 'http://192.168.43.45:5000/' + path;

  if (method === 'POST') {
    return fetch(url, {
      method: method,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(value),
    })
      .then(res => res.json())
      .then(res => {
        return res.response;
      });
  } else {
    return fetch(url).then(res => res.json());
  }
};

export default Api;
