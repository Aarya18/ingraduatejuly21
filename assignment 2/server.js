const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
 
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get('/js/app.js',function(req,res){
    res.sendFile(__dirname+"/js/app.js");
})
app.get('/css/style.css',function(req,res){
    res.sendFile(__dirname+"/css/style.css");
})


 
const port=3000;
app.listen(port,function(){
    console.log(`http://localhost:${port} started`);
});