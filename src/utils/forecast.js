const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e12c67f36c19978d0d4addc831afc968&query=' + longitude + ',' + latitude + '&units=f'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather Service!', undefined)
        } else if (body.error) {
            callback ('Unable to find location')
        } else {
            callback (undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
            }
        })
}


    module.exports = forecast