const newRouter = require('./newsRoute')
const site = require('./site')
function route(app) {
    //   app.get('/new-page', (req, res) => {
    //       res.render('tintuc');
    //     })
      app.use('/new-page',newRouter);
      app.use('home',site);
}

module.exports = route;