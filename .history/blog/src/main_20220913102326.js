const express = require('express')
const morgan = require('morgan')
const 
const app = express()
const port = 5000

app.use(morgan('combined'))

app.get('/trang-chu', (req, res) => {
  return res.send(`
  123
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})