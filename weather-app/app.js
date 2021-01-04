const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=0f7b1b70736d02393b08ee6ede0207bb&query=toronto';

request({ url: url, json: true }, function (error, response) {
    console.log(response.body.current)
})