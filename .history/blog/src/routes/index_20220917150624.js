const newRouter = require('./newsRoute')
const homeRouter = require('./homeRoute')
function route(app) {
   app.use('/home')
    //   app.get('/new-page', (req, res) => {
    //       res.render('tintuc');
    //     })
      app.use('/new-page',newRouter);
      app.use('home',homeRouter);
}

module.exports = route;