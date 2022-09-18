const NewContronller = require('./')

function route(app) {
    app.get('/home', (req, res) => {
        res.render('home');
      })
      
      app.get('/new-page', (req, res) => {
          res.render('tintuc');
        })
      
      
        app.get('/search', (req, res) => {
          res.render('search');
        })
      
      app.post('/search', (req, res) => {
        console.log(req.body);
         res.send('');
      })
}

module.exports = route;