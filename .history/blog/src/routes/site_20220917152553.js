//Quan lys route cua new-page
const { application } = require('express');
const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');
// NewContronller.index
router.use('/',SiteController.home);
router.use('/search', SiteController.search);




module.exports = router;