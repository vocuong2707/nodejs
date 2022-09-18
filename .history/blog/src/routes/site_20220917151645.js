//Quan lys route cua new-page
const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');
// NewContronller.index
router.use('/',NewController.home);
router.use('/', NewController.search);



module.exports = router;