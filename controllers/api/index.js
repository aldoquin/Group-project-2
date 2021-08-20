const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
// const homepageRoutes = require('/homepageRoutes');
// const loginRoutes = require('./loginRoutes');


router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
// router.use('/homepage', homepageRoutes);


module.exports = router;
