const router = require('express').Router();

const { User } = require('../models');
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;