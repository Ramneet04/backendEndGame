const mongoose=require('mongoose');

//node connect with mongodb through mongoose
mongoose.connect("mongodb://127.0.0.1:27017/practice");

//schema => tells how every document or small entity will look or what it contains.

const userSchema=mongoose.Schema({
  username: String,
  name: String,
  age: Number,
})

module.exports=mongoose.model("user",userSchema)