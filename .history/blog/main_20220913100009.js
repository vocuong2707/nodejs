const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 5000

app.use(morgan('e'))

app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})