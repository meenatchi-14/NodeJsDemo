import express from "express"
const app=express();
//middle wares
app.use(express.json());
let resturants=[
    {
        id:"1",
        name:"KFC",
        special:"crispy chicken"
    },{
        id:"2",
        name:"A2B",
        special:" chicken" 
    },{
        id:"3",
        name:"Chicken",
        special:"65"
    }]
//get info
app.get("/res",(req,res)=>{
    res.send(resturants);
});
//
app.post("/add/res",(req,res)=>{
  
    let newResturants={
...req.body,
id:(resturants.length + 1).toString(),
    };
    resturants=[...resturants,newResturants]
    res.send(resturants)
})
app.put("/edit/res/:id", (req, res) => {
    
    const { id } = req.params;
     const findRes = resturants.find((res) => res.id === id);
     findRes.special = req.body.special;
     res.send(resturants);
  });
  
  app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    const newset = resturants.filter((res) => res.id != id);
    resturants = [...newset];
    res.send(`Deleted Resturant`);
  });
//listen to the server
app.listen(9000,()=>console.log("local server started 9000"))