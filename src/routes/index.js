const {Router} = require('express');

const secrets = require('./secrets');

const router = Router();
router.use('/secrets', secrets);

module.exports = router;
