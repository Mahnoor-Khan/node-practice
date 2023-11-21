const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname)
const staticSilePath = path.join(__dirname, '../public')
const app = express();
const PORT = 8000

app.set('view engine', 'hbs')
// Id directory names changes from views to templates use the line below
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

console.log(viewsPath)
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);
// app.use(express.static(staticSilePath))

app.get('', (req, res) => {
    res.render('index', {
        name: "Mahnor Khan",
        title: "Weather app"
    })
})

// app.get('' , (req, res) => {
//     res.send('<h1>Hello Express!</h1>')
// })


app.get('/help' , (req, res) => {
    res.render('help', {
        name: "Mahnor Khan",
        title: "Weather app Help"
    })
})
app.get('/about' , (req, res) => {
    res.render('about', {
        name: "Mahnor Khan",
        title: "Weather app About"
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})