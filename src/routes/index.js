const express = require('express');
const usersRouter = require('./users.routes');


function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', usersRouter);

}

module.exports = routerApi;
