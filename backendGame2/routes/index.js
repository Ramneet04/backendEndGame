var express = require('express');
var router = express.Router();
const userModel=require("./users");

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

router.get("/create",async function(req,res){
  let userdata = await userModel.create({
    username: "Ramneet04Singh",
    nickname: "ram",
    description: "i love python.",
    categories:['js','python','java','tailwind'],
  });
  res.send(userdata);
});
router.get("/find",async function(req, res){
  var regex=new RegExp("^ramneet04$","i");
  let user= await userModel.find({username:regex});
  res.send(user);
})





module.exports = router;
