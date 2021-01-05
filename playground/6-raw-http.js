const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=0f7b1b70736d02393b08ee6ede0207bb&query=toronto&units=f';


const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const JSONdata = JSON.parse(data);
        console.log(JSONdata);
    })
})

request.end();