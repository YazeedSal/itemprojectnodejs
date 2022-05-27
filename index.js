const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected to database"))


const app = express()
const PORT = process.env.PORT 
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