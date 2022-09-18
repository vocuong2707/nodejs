//Quan lys route cua new-page
const express = require('express');
const router = express.Router();

const NewController = require('../app/controllers/NewController');
// NewContronller.index

router.use('/', NewController.index);

router.use('/',)

module.exports = router;