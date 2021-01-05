const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('toronto', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})

forecast('', '', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})