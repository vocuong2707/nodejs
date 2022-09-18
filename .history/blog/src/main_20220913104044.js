const path = re
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 4000

app.use(morgan('combined'))

app.engine('handlebars',handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join);
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})