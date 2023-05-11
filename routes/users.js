var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Post = require('../models/post');
var usersCtrl = require('../controllers/users');



// async function getUserInfo (id) {
//     return await User.findById(id);
// }
router.get('/profile/:id' , async function(req,res,next) {
    Post.find({userId:req.params.id}).then((posts) => {
        var userPosts = posts ;
        if (req.user.id == req.params.id) {
            res.render('./users/myProfile.ejs' , {
                loggedInUser : req.user, 
                posts : userPosts,
        
            })
        }
        else {
          res.redirect("/")
         }
    });
       
})

module.exports = router;