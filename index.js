import express from "express"
const app=express();
const resturants=[
    {
        name:"KFC",
        special:"crispy chicken"
    },{
        name:"A2B",
        special:" chicken" 
    }
]
//get info
app.get("/home",(req,res)=>{
    res.send(resturants);
});
//listen to the server
app.listen(9000,()=>console.log("server started in local server:9000 "))
