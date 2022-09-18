//Quan lys route cua new-page
const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');
// NewContronller.index
router.use('/home',SiteController.home);
router.use('/search', SiteController.search);
router.use('/',SiteController.main);


module.exports = router;