const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=0f7b1b70736d02393b08ee6ede0207bb&query=toronto&units=f';


http.request(url, (response) => {

    response.on('data', (chunk) => {

    })
})