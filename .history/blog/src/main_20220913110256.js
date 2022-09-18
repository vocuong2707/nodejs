const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 4000

app.use(morgan('combined'))

app.engine('hds',handlebars.engine({
    extname : '.hds'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'recource/views'));

app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/tintuc', (req, res) => {
    res.render('tintuc');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})