const express = require('express')
const app = express()
const port = 5000

app.use(morgan(req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})