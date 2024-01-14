var express = require('express');
var router = express.Router();
const userModel=require("./users");
//we're server server send to browser or frontend
/* GET home page. */
router.get('/', function(req, res) {
  res.cookie({"age":19});
  res.render('index');
});
router.get('/readcookie', function(req, res) {
  console.log(req.cookies);
  console.log(req.cookies.age);
  res.send("check");
});

router.get('/deletecookie', function(req, res) {
  res.clearCookie("age");
  res.send("cleared");
});

// router.get('/', function(req, res) {
//   req.session.ban=true;
//   res.render('index');
// });

// router.get('/checkban',function(req,res){
//   if(req.session.ban){
//     res.send("You're banned")
//   }
//   res.send("hey");
// })

// router.get('/removeban',function(req,res){
// req.session.destroy(function(err){
//   if(err) throw new err;
//   res.send("banned removed")
// });
// })
// router.get('/create', async function(req, res) {
//   const usercreated=await userModel.create({
//     username: "Ramneet04",
//     age: 19,
//     name: "Ramneet",
//   });
//   console.log("hello")
//   res.send(`user created: ${usercreated}`);
// });
// router.get('/find', async function(req, res) {
//   const allusers=await userModel.find({username:"Ramneet04"});
//   res.send(`user created: ${allusers}`);
//   console.log(allusers)
// });
// router.get('/delete', async function(req, res) {
//   const deleteduser=await userModel.findOneAndDelete({username:"Ramneet04"});
//   res.send(`user created: ${deleteduser}`);
// });

module.exports = router;
