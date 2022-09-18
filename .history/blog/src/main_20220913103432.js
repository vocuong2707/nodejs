const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 4000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  return res.send(`
  123
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})