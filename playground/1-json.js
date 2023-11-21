const fs = require('fs');

// const book = {
//     title: "Ego is the Enemy",
//     author : "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer.toString())
data.name = 'Aimen'
data.age = '30'

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)