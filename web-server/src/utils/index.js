const request = require('request');
const https = require('https')

const url = `https://api.openweathermap.org/data/2.5/weather?q=lahore&units=metric&APPID=f4770db3c9288480e941632088e89158w`
    const requests = https.request(url, (res) => {
        let data = ''

        res.on('data', (chunk) => {
            data = data + chunk.toString()
            console.log(data)
        })
        
        res.on('end' , (chunk) => {
            body = JSON.parse(data)
            console.log(body)
        })
    })
    requests.end()
    requests.on('error', (error) => {
        console.log('An error Occured', error)
    })