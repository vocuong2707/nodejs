const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 5000

app.use(morgan('combined'))

app.get('/trang-chu', (req, res) => {
  return res.send('<h1>Hello World</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})