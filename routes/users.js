var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');
var usersCtrl = require('../controllers/users');
const mongoose = require('mongoose');


router.get('/profile/:id' ,async function(req,res,next) {
    // await Post.find({ userId : req.params.id}).exec((posts) => {;
        if (req.user.id == req.params.id) {
            // var posts = await Post.find({userId : req.params.id});
                // console.log(posts , " AVALIN BAR KE PEIDA SHODE");
                res.render('./users/myProfile' , {
                    name : req.user.firstName, 
                    imge : req.user.avatar,
                    loggedInUser : req.user , 
                })
        }
        else {
            console.log(" chera oomade bashim to else akhe ????? ");
            res.render('./users/profile.ejs');
        }
   
})
module.exports = router;