var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');
var usersCtrl = require('../controllers/users');


router.get('/profile/:id' , function(req,res,next) {
    Post.find({userId:req.params.id}).then((posts) => {
        var userPosts = posts ;
        if (req.user.id == req.params.id) {
            res.render('./users/myProfile.ejs' , {
                loggedInUser : req.user, 
                posts : userPosts,
        
            })
        }
        else {
            User.findById(req.params.id).then ((user) => {
                res.render('./users/profile.ejs' , {
                    loggedInUser : req.user, 
                    posts : userPosts,
                    user : user
                });
            })
        }
    })
})
module.exports = router;