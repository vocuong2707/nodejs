//Quan lys route cua new-page
const express = require('express');
const router = express.Router();

const NewController = require('../app/controllers/NewController');
// NewContronller.index
router.use('/:slug', NewController.show);
router.use('/', NewController.index);

module.exports = router;
