const request = require('request');
const https = require('https')

console.log(process.argv)

// const getWeather = (city) => {
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

// }
// const getWeather = (city) => {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=f4770db3c9288480e941632088e89158`

// request({url : url, json :true}, (error, response) => {
//     // const data = JSON.parse(response.body)
//     if(error){
//         console.log(error)
//     }
//     else if(!city){
//         console.log("Please provide the city!")
//     }
//     else if(response.body.cod === '400'){
//         console.log('Unable to find location')
//     }
//     else if(response.body.weather){
//         // console.log(response)
//         console.log(`The Weather in ${city} is currently ${response.body.weather[0].main}, and temprature is ${Math.round(response.body.main.temp)}°.`)
//     }
//     else{
//     console.log("City not found, try again!")
// }
// })
// }

// getWeather(process.argv[2])