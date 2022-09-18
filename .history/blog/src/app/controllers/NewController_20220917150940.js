//xu ly contronller cua new-page

class NewContronller { 

    // GET[] new-page
    index(req,res) {
        res.render('tintuc');
    }
    //GET[] /new-page/
    show() {

    }
};

module.exports = new NewContronller;