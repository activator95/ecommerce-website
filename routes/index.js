const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// for if wrong rout send back message wrong rout
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;