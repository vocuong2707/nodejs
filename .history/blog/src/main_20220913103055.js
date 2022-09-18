const express = require('express')
const morgan = require('morgan')
import { engine } from 'express-handlebars';
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  return res.send(`
  res.render('home');
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})