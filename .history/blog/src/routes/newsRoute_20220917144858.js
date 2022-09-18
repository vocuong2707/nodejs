//Quan lys route cua new-page
const express = require('express');
const router = express.Router();

const NewContronller = require('../app/controllers/NewController');
// NewContronller.index

router.use('/new-page', NewContronller.index)

module.exports = router;