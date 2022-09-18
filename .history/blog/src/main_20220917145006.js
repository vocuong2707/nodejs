const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars');
const app = express()
const route = require('./routes/index')

var sass = require("sass");

const port = 3000

// app.use(morgan('combined'))

//log img
app.use(express.static(__dirname + '/public'))
// gui duoi dang form submit
app.use(express.urlencoded({
  extended : true
}));
// gui duoi dang XMLHttpRequest , fetch , axios ( code javascript)
app.use(express.json());

app.engine('hbs',hbs.engine({
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutDir: __dirname + '/views/layouts',
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'/recource/views'));

// routes init( khoi  tao tuyen duong)
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
