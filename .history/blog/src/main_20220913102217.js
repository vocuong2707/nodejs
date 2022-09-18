import { engine } from 'express-handlebars';
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 5000

app.use(morgan('combined'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.get('/trang-chu', (req, res) => {
  return res.send(`
  123
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})