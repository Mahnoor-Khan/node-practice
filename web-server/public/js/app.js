// import cities from 'all-the-cities';

const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// const getCitiesData = () => {fetch('http://puzzle.mead.io/puzzle').then((res) => {
    //     res.json().then((data) => {
        //         // console.log(data)
        //         console.log('cities', cities)
        //     })
        // })}
        
        const getWeatherData = (inputValue) => {
            console.log("inputValue", inputValue)
            messageOne.textContent = 'Loading ...'
            fetch(`http://localhost:8000/weather?city=${inputValue}`).then((res) => {
                res.json().then((data) => {
                    if(data.body.message){
                        // getCitiesData()
                        messageOne.textContent = ''
                        messageTwo.textContent = data.body.message
                        return console.log(data.body.message)
                    }
                    else{
                        // getCitiesData()
                        messageOne.textContent = ''
                        messageTwo.textContent = `${data.body.name} temparture is ${data.body.main.feels_like} and the Weather is ${data.body.weather[0].main}`
                return console.log(data)
            }
        })
    })
}
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    getWeatherData(searchInput.value)
})