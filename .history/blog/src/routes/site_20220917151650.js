//Quan lys route cua new-page
const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');
// NewContronller.index
router.use('/',SiteController.home);
router.use('/', SiteController.search);



module.exports = router;