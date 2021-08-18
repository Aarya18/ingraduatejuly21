
const express=require('express');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,resp){
  resp.sendFile(__dirname+"/index.html")
});
app.get('/index.html',function(req,resp){
  resp.sendFile(__dirname+"/index.html")
});
app.get('/css/style.css',function(req,resp){
  resp.sendFile(__dirname+"/css/style.css")
});
app.get('/js/app.js',function(req,resp){
  resp.sendFile(__dirname+"/js/app.js")
});
// app.post('/welcome',function(req,resp){
//   resp.sendFile(__dirname+"/welcome.html")
// });
app.post('/welcome.html',function(req,resp){
  // console.log(req.body);
  const product=req.body;
  console.log(product);
  resp.sendFile(__dirname+"/welcome.html")
});

const port=3000;
app.listen(port,function(){
console.log(`http://localhost:${port} started listening`);
});