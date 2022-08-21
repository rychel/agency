const Api = (paths, value) => {
    const url = 'https://591b-129-0-76-108.eu.ngrok.io';
    
    if(paths == 'POST'){
        return fetch(url, {
            method: paths,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: value})
            }).then((res) => res.json());
    }
    else{
        return fetch(url).then((res) => res.json());
    }
}

export default Api;