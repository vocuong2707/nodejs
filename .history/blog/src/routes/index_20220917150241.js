const newRouter = require('./newsRoute')
function route(app) {
   app.use('/home',newRouter)
    //   app.get('/new-page', (req, res) => {
    //       res.render('tintuc');
    //     })
      app.use('/new-page',newRouter);
      
        app.get('/search', (req, res) => {
          res.render('search');
        })
      
      app.post('/search', (req, res) => {
        console.log(req.body);
         res.send('');
      })
}

module.exports = route;