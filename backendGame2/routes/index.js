var express = require('express');
var router = express.Router();
const userModel=require("./users");
const passport = require('passport');
const localStrategy=require('passport-local');
//user can use local strategy now.
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */

// router.get('/failed',(req, res)=>{
//   req.flash("age",19);
//   req.flash("error","its a error");
//   res.send("created");
// });

// router.get('/checking',(req, res)=>{
//   console.log(req.flash("age"));
//   console.log(req.flash("error"));
//   res.send("check on backend terminal");
// });


router.get('/', function(req, res) {
  res.render('index');
});

router.get('/profile', isLoggedIn ,function(req, res) {
  res.send('Welcome to profile');
});

router.post('/register', function(req,res){
  var userdata= new userModel({
    username: req.body.username,
    secret: req.body.secret
  })
  userModel.register(userdata, req.body.password)
  .then(function(registereducer){
    passport.authenticate("local")(req,res, ()=>{
      res.redirect('/profile');
    })
  })
});

router.post("/login",passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect: "/"
}), function(req,res){ })

router.get("/logout",function(req,res,next){
  req.logOut(function(err){
    if(err){
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req,res,next){ //it works as a middleware
  if(req.isAutheticated()){ //agar autehnticate ho move forward matlab agle function pe jaha use kiya hai as amiddleware
    return next();
  }
  res.redirect("/"); //else go to "/" ;
}
// router.get("/create",async function(req,res){
//   let userdata = await userModel.create({
//     username: "Ramneet04Singh",
//     nickname: "ram",
//     description: "i love python.",
//     categories:['js','python','java','tailwind'],
//   });
//   res.send(userdata);
// });

// router.get("/find",async function(req, res){
//   var regex=new RegExp("^ramneet04$","i");
//   let user= await userModel.findOne({username:regex});
//   res.send(user);
// });

// router.get("/find",async function(req, res){
//   let user= await userModel.find({categories :{$all : ['java','tailwind']}});
//   res.send(user);
// });

// router.get("/find",async function(req,res){
//   var date1=new Date('2024-01-15');
//   var date2=new Date('2024-01-16');
//   let user=await userModel.find({datecreated: {$gte:date1,$lte:date2}});
//   res.send(user);
// })
// router.get("/find",async function(req,res){
//   let user=await userModel.find({categories: {$exists:true}});
//   res.send(user);
// })

// router.get("/find",async function(req,res){
//   let user=await userModel.find({
//     $expr: {
//       $and: [
//         { $gte: [{ $strLenCP: "$nickname"}, 0]},
//         { $lte: [{ $strLenCP: "$nickname"}, 4]}
//       ]
//     }
//   });
//   res.send(user);
// })

module.exports = router;
