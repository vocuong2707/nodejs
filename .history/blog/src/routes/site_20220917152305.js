//Quan lys route cua new-page
const { application } = require('express');
const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');
// NewContronller.index
router.use('/search',SiteController.home);
router.use('/home', SiteController.search);




module.exports = router;