//xu ly contronller cua new-page

class NewContronller { 

    // GET[] new-page
    index(req,res) {
        res.render('new-page')
    }
}

module.exports = new NewContronller;