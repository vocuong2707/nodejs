//xu ly contronller cua new-page

class SiteController { 

    // GET[] new-page
    home(req,res) {
        res.render('home');
    }
    //GET[] /new-page/:slug
    search(req,res) {
        res.render('search');
    }
};

module.exports = new SiteController;