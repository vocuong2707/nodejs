const newRouter = require('./newsRoute')
const homeRouter = require('./homeRoute')
con
function route(app) {
    //   app.get('/new-page', (req, res) => {
    //       res.render('tintuc');
    //     })
      app.use('/new-page',newRouter);
      app.use('home',homeRouter);
}

module.exports = route;