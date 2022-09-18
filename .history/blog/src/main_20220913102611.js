const express = require('express')
const morgan = require('morgan')
import { engine } from 'express-handlebars';
const handlebars = require('express-handlebars')
const app = express()
const port = 5000

app.use(morgan('combined'))

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.get('/trang-chu', (req, res) => {
  return res.send(`
  123
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})