## flash messages
it means make any data in any route and use it any other route.
<br>
global variable is worst thing for backend if they are not nessesary.
<br>

#### flash message allows you to make data in other route and you can use it in any other route.
#### flash works on express session. session are data which is saved in backend, flash has ability to use data cross-routes.

## intermediate mongodb

1. How Can i perform a case-insensitive search in Mongoose?
- router.get("/find",async function(req, res){ 
  <br>
  var regex=new RegExp("^ramneet04$","i");  //regular expression <br>
  let user= await userModel.find({username:regex});
  <br>
  res.send(user);
  <br>
  // ^ starting, $ ending
  <br>
});

2. Authentication and Authorization