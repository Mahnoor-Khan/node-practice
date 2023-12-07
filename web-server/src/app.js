const request = require('request');
const https = require('https')
const path = require("path");
const express = require("express");
const hbs = require("hbs");

console.log(__dirname);
const staticSilePath = path.join(__dirname, "../public");
console.log(staticSilePath)
const app = express();
const PORT = 8000;

app.set("view engine", "hbs");
// Id directory names changes from views to templates use the line below
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
console.log(viewsPath);

console.log(viewsPath);
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticSilePath));

// For the home page
app.get("", (req, res) => {
    res.render("index", {
        name: "Mahnor Khan",
        title: "Weather",
      });
});

// For the weather endpoint
app.get('/Weather', (req, res) => {
  if(!req.query.city){
      return res.send({
        error: "You must have to provide city query!"
      });
  }
const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&units=metric&APPID=f4770db3c9288480e941632088e89158`
    const requests = https.request(url, (response) => {
        let data = ''
        response.on('data', (chunk) => {
            data = data + chunk.toString()
        })
        
        response.on('end' , (chunk) => {
            body = JSON.parse(data)
            return res.send({
              body
            })
        })
    })
    requests.end()
    requests.on('error', (error) => {
        return res.send({error: `An error occured ${error}`})
    })



});

// For the help page
app.get("/help", (req, res) => {
  res.render("help", {
    name: "Mahnor Khan",
    title: "Help",
  });
});

// For about page
app.get("/about", (req, res) => {
  res.render("about", {
    name: "Mahnor Khan",
    title: "About",
  });
});

// For product page
app.get('/products', (req, res) => {
  if(!req.query.search){
    return res.send({
      error: "You must provide a search query!"
    })
  }
    res.send({
      products: []
    })
});

// When no help article found
app.get("/help/*", (req, res) => {
  res.render("404Page", {
    message: "Help Article Not Found",
    name: "Mahnoor Khan",
  });
});


// When no page found
app.get("*", (req, res) => {
  res.render("404Page", {
    message: "Page Not Found",
    name: "Mahnoor Khan",
    title: "Weather app Help",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});