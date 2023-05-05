var express = require('express');
var router = express.Router();
var User = require('../models/user');
var usersCtrl = require('../controllers/users');


router.get('/profile/:id' , function(req,res,next) {
    
    if (req.user.id == req.params.id) {
        res.render('./users/myProfile.ejs' , {
            name : req.user.firstName, 
            imge : req.user.avatar
    
        })
    }
    else {
        res.render('./users/profile.ejs');
    }
})
module.exports = router;