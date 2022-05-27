const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const Item = require ('./server/models/item.model')

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected to database"))


const app = express()
const PORT = process.env.PORT 
const items = [] 

app.use(express.json())
app.get("/getItems", function (req,res){
   res.send(items) 
})

app.post("/additem", async function (req,res){
    const item = new Item(req.body);
    const response = await item.save();
    res.send(response);
    res.send("item recieved")
})

app.listen(PORT, function(){
    console.log("up and running on port " +PORT);
})