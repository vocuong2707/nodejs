const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars');
const app = express()
var sass = require("sass");

const port = 3000

// app.use(morgan('combined'))

//log img
app.use(express.static(__dirname + '/public'))
// gui duoi dang form submit
app.use(express.urlencoded());

app.use(express.json());

app.engine('hbs',hbs.engine({
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutDir: __dirname + '/views/layouts',
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'/recource/views'));
app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/new-page', (req, res) => {
    res.render('tintuc');
  })


  app.get('/search', (req, res) => {
    res.render('search');
  })

app.post('/search', (req, res) => {
  console.log(req.body);
   res.send('');
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
