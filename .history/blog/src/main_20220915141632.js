const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars');
const app = express()
const port = 3000

app.use(morgan('combined'))

//log img
app.use(express.static(__dirname + '/public'))

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

app.get('/tintuc', (req, res) => {
    res.render('tintuc');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var sass = require("sass");
sass.render({
  file: "app.scss",
  importer: function(url, prev, done) {
    // ...
  },
  fiber: Fiber
}, function(err, result) {
  // ...
});