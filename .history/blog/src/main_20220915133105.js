const path = require('path')
const express = require('express')
const morgan = require('morgan')
const hbs = require('express-handlebars');
const app = express()
const port = 4000

app.use(morgan('combined'))

app.engine('hbs',hbs.engine({
    extname : '.hbs',
    defaultLayout: 'main', 
    layoutDir: '/views/layouts',
    partialsDir: path.join(__dirname, './views/partial')
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