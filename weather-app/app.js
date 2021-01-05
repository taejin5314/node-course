const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=0f7b1b70736d02393b08ee6ede0207bb&query=toronto&units=f';

request({ url: url, json: true }, function (error, response) {
    // console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
})

// Geocoding
// Address -> Lat / Long -> Weather

// const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGFlamluNTMxNCIsImEiOiJja2pqNzRidTQzNnh3MnpuMGUzMm9veGhsIn0.9NGVRrMyQipyH-wwenIsWA'
// request({ url: geocodingURL, json: true }, function (error, response) {
//     console.log('Lat: ' + response.body.features[0].center[0]);
//     console.log('Long: ' + response.body.features[0].center[1])
// })