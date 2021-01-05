const request = require('postman-request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');

// const url = 'http://api.weatherstack.com/current?access_key=0f7b1b70736d02393b08ee6ede0207bb&query=toronto&units=f';

// request({ url: url, json: true }, function (error, response) {
//     if (error) {
//         console.log(chalk.red.inverse('Unable to connect to weather service!'));
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/toronto.json?access_token=pk.eyJ1IjoidGFlamluNTMxNCIsImEiOiJja2pqNzRidTQzNnh3MnpuMGUzMm9veGhsIn0.9NGVRrMyQipyH-wwenIsWA'
// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find the location!')
//     } else {
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1];
//         console.log(latitude, longitude);
//     }
// })

geocode('toronto', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})