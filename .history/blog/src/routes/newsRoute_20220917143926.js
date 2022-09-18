//Quan lys route cua new-page
const express = require('express');
const router = express.Router();

app.get('/new-page', (req, res) => {
    res.render('tintuc');
  })

module.exports = router;