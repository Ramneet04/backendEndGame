# MONGO DB
every app has a database or the data of that app is stored in a store but instead of putting it directly we store in a container in which only the data of that particular app is going to store.
## CODE SIDE VS MONGO DB SIDE

1. DB setup -> DB formation
2. Model -> collection
<br>
models(code) => collection(DB)
<br>
3. schema -> documents
<br>
schema(code) => documents(DB)
<br>


complete data of app is => DB
<br>
app has variety of data so these variety are called collections
<br>
in a single collection we have a single person data called document. and how every document will look alike is called schema.

## Client Vs Server
- client : browser, mobile device
- server : computer that runs nodejs (server side code),
- client has cookies and server has sessions.
### session
- create req.session.name=val;
- read req.session.name === condition;
- delete req.session.destroy(callback(err))
### cookie
- res.cookie("name",value);
- req.cookies.name;
- res.clearCookie("name);