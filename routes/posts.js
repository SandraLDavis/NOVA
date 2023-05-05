var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Post = require('../models/post');

// var multer = require('multer');
// var cloudinary = require('cloudinary').v2;
// var {cloudinaryStorage} = require('multer-storage-cloudinary');

// var storage = new cloudinaryStorage({
//     cloudinary : cloudinary, 
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname );
//       },
//     allowedFormats: ["jpg", "jpeg", "png"],
// });

// var upload = multer({storage})
// var postsCtrl = require('../controllers/posts');

router.get('/new' ,function(req,res,next) {
    res.render('newPost' , {
        loggedInUser : req.user 
    })
})
router.post('/upload' , function(req,res,next) {
    console.log(req.file);
    res.redirect(`/users/profile/${req.user.id}`);
})


module.exports = router;