import express from "express"

const app = express()
const PORT = 3001 
const items = [] 

app.use(express.json())
app.get("/getItems", function (req,res){
   res.send(items) 
})

app.post("/additem", function (req,res){
    const item = req.body
    items.push(item)
    res.send("item recieved")
})

app.listen(PORT, function(){
    console.log("up and running on port " +PORT);
})