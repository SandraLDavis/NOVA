var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');
var usersCtrl = require('../controllers/users');


router.get('/profile/:id' , function(req,res,next) {
    
    if (req.user.id == req.params.id) {
        Post.find({userId : req.params.id}).then((posts) => {
            console.log(posts);
            res.render('./users/myProfile.ejs' , {
                name : req.user.firstName, 
                imge : req.user.avatar,
                loggedInUser : req.user , 
                posts
        
            })
        })
    }
    else {
        res.render('./users/profile.ejs');
    }
})
module.exports = router;