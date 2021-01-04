const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=0f7b1b70736d02393b08ee6ede0207bb&query=toronto';

request(url, function (error, response, body) {
    // console.log('Error: ' + error);
    // console.log('Response: ' + response);
    // console.log('Body: ' + body);
    const data = JSON.parse(body);
    console.log(data);
})