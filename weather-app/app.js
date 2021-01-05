const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = 'http://api.weatherstack.com/current?access_key=0f7b1b70736d02393b08ee6ede0207bb&query=toronto&units=f';

// request({ url: url, json: true }, function (error, response) {
//     if (error) {
//         console.log(chalk.red.inverse('Unable to connect to weather service!'));
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
//     }
// })

geocode('toronto', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})

forecast('', '', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})