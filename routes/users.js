var express = require('express');
var router = express.Router();
var User = require('../models/user');
var usersCtrl = require('../controllers/users');


router.get('/profile/:id' , function(req,res,next) {
    
    // if (req.user.id == req.params.id || req.params.id == 0101010010) {
        res.render('./users/myProfile.ejs' , {
            name : req.user.firstName, 
            imge : req.user.avatar
    
        })
    // }
})
module.exports = router;