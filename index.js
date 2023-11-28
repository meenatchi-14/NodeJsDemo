import express from "express"
const app=express();
//get info
app.get("/home",(req,res)=>{
    res.send({name:"new Application"});
});
//listen to the server
app.listen(9000,()=>console.log("server started in local server:9000 "))
