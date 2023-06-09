const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const dashboardRoutes = require('./dashboard-routes')

router.use('/users', userRoutes);

router.use('/post', postRoutes);

router.use('/dashboard', dashboardRoutes)

module.exports = router;
