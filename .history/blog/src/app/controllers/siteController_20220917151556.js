//xu ly contronller cua new-page

class SiteController { 

    // GET[] new-page
    index(req,res) {
        res.render('tintuc');
    }
    //GET[] /new-page/:slug
    show(req,res) {
        res.send('News DETAILS!!!');
    }
};

module.exports = new NewContronller;