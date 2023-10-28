// INDEX FOR API ROUTES


const router = require('express').Router();
const blogPostRoutes = require('./blogPostRoutes');
const userAuthRoutes = require('./userAuthRoutes');

router.use('/blog', blogPostRoutes);
router.use('/users', userAuthRoutes)

module.exports = router;